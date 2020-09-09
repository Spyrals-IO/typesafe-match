import ts from 'typescript'

export function transformer(program: ts.Program) {
  function visitor(ctx: ts.TransformationContext, sf: ts.SourceFile) {
    const typeChecker = program.getTypeChecker()

    const visitor: ts.Visitor = (node: ts.Node) => {
      if(ts.isCallExpression(node) && !!node.typeArguments && node.typeArguments.length === 1 && node.expression.getText(sf) === 'Constructor') {
        const [typeNode] = node.typeArguments
        const type = typeChecker.getTypeFromTypeNode(typeNode)
        const properties = type.getApparentProperties()
        return generateConstructorLambda(properties)
      }

      return ts.visitEachChild(node, visitor, ctx)
    }

    return visitor
  }

  return (ctx: ts.TransformationContext): ts.Transformer<ts.SourceFile> => {
    return (sf: ts.SourceFile) => ts.visitNode(sf, visitor(ctx, sf))
  }
}

const generateConstructorLambda = (properties: ts.Symbol[]): ts.VisitResult<ts.Node> => 
  ts.createArrowFunction(
    undefined,
    undefined,
    properties.map(property => {
      const declaration = property.valueDeclaration as ts.VariableDeclaration
      return ts.createParameter(undefined, undefined, undefined, property.name, undefined, declaration.type, undefined)
    }),
    undefined,
    undefined,
    ts.createObjectLiteral(properties.map(property => 
      ts.createShorthandPropertyAssignment(property.name, undefined)
    ))
  )