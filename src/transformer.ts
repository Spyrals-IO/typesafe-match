import ts from 'typescript'

export function transformer(program: ts.Program) {
  const typeChecker = program.getTypeChecker()
  return (ctx: ts.TransformationContext): ts.Transformer<ts.SourceFile> => (sf: ts.SourceFile) => {
    const visitor: ts.Visitor = (node: ts.Node) => {
      if(ts.isCallExpression(node) && !!node.typeArguments && node.typeArguments.length === 1 && node.expression.getText(sf) === 'Constructor') {
        const [typeNode] = node.typeArguments
        const type = typeChecker.getTypeFromTypeNode(typeNode)
        const properties = type.getApparentProperties().filter(symbol => symbol.name !== "__type")
        return generateConstructorLambda(properties, type.symbol.name)
      }

      return ts.visitEachChild(node, visitor, ctx)
    }

    return ts.visitNode(sf, visitor)
  }
}

const generateConstructorLambda = (properties: ts.Symbol[], typeName: string): ts.VisitResult<ts.Node> => {
  const affects: ts.ObjectLiteralElementLike[] = properties.map(property => 
    ts.createShorthandPropertyAssignment(property.name, undefined)
  )

  affects.push(ts.createPropertyAssignment("__type", ts.createLiteral(typeName)))
  return ts.createArrowFunction(
    undefined,
    undefined,
    properties.map(property => {
      const declaration = property.valueDeclaration as ts.VariableDeclaration
      return ts.createParameter(undefined, undefined, undefined, property.name, undefined, declaration.type, undefined)
    }),
    undefined,
    undefined,
    ts.createObjectLiteral(affects)
  )
}
