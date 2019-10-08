// Generated from Java8Parser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by Java8Parser.
function Java8ParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

Java8ParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
Java8ParserListener.prototype.constructor = Java8ParserListener;

// Enter a parse tree produced by Java8Parser#literal.
Java8ParserListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#literal.
Java8ParserListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#primitiveType.
Java8ParserListener.prototype.enterPrimitiveType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#primitiveType.
Java8ParserListener.prototype.exitPrimitiveType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#numericType.
Java8ParserListener.prototype.enterNumericType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#numericType.
Java8ParserListener.prototype.exitNumericType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#integralType.
Java8ParserListener.prototype.enterIntegralType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#integralType.
Java8ParserListener.prototype.exitIntegralType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#floatingPointType.
Java8ParserListener.prototype.enterFloatingPointType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#floatingPointType.
Java8ParserListener.prototype.exitFloatingPointType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#referenceType.
Java8ParserListener.prototype.enterReferenceType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#referenceType.
Java8ParserListener.prototype.exitReferenceType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#classOrInterfaceType.
Java8ParserListener.prototype.enterClassOrInterfaceType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#classOrInterfaceType.
Java8ParserListener.prototype.exitClassOrInterfaceType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#classType.
Java8ParserListener.prototype.enterClassType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#classType.
Java8ParserListener.prototype.exitClassType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#classType_lf_classOrInterfaceType.
Java8ParserListener.prototype.enterClassType_lf_classOrInterfaceType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#classType_lf_classOrInterfaceType.
Java8ParserListener.prototype.exitClassType_lf_classOrInterfaceType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#classType_lfno_classOrInterfaceType.
Java8ParserListener.prototype.enterClassType_lfno_classOrInterfaceType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#classType_lfno_classOrInterfaceType.
Java8ParserListener.prototype.exitClassType_lfno_classOrInterfaceType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#interfaceType.
Java8ParserListener.prototype.enterInterfaceType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#interfaceType.
Java8ParserListener.prototype.exitInterfaceType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#interfaceType_lf_classOrInterfaceType.
Java8ParserListener.prototype.enterInterfaceType_lf_classOrInterfaceType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#interfaceType_lf_classOrInterfaceType.
Java8ParserListener.prototype.exitInterfaceType_lf_classOrInterfaceType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#interfaceType_lfno_classOrInterfaceType.
Java8ParserListener.prototype.enterInterfaceType_lfno_classOrInterfaceType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#interfaceType_lfno_classOrInterfaceType.
Java8ParserListener.prototype.exitInterfaceType_lfno_classOrInterfaceType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#typeVariable.
Java8ParserListener.prototype.enterTypeVariable = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#typeVariable.
Java8ParserListener.prototype.exitTypeVariable = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#arrayType.
Java8ParserListener.prototype.enterArrayType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#arrayType.
Java8ParserListener.prototype.exitArrayType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#dims.
Java8ParserListener.prototype.enterDims = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#dims.
Java8ParserListener.prototype.exitDims = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#typeParameter.
Java8ParserListener.prototype.enterTypeParameter = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#typeParameter.
Java8ParserListener.prototype.exitTypeParameter = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#typeParameterModifier.
Java8ParserListener.prototype.enterTypeParameterModifier = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#typeParameterModifier.
Java8ParserListener.prototype.exitTypeParameterModifier = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#typeBound.
Java8ParserListener.prototype.enterTypeBound = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#typeBound.
Java8ParserListener.prototype.exitTypeBound = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#additionalBound.
Java8ParserListener.prototype.enterAdditionalBound = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#additionalBound.
Java8ParserListener.prototype.exitAdditionalBound = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#typeArguments.
Java8ParserListener.prototype.enterTypeArguments = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#typeArguments.
Java8ParserListener.prototype.exitTypeArguments = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#typeArgumentList.
Java8ParserListener.prototype.enterTypeArgumentList = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#typeArgumentList.
Java8ParserListener.prototype.exitTypeArgumentList = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#typeArgument.
Java8ParserListener.prototype.enterTypeArgument = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#typeArgument.
Java8ParserListener.prototype.exitTypeArgument = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#wildcard.
Java8ParserListener.prototype.enterWildcard = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#wildcard.
Java8ParserListener.prototype.exitWildcard = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#wildcardBounds.
Java8ParserListener.prototype.enterWildcardBounds = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#wildcardBounds.
Java8ParserListener.prototype.exitWildcardBounds = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#packageName.
Java8ParserListener.prototype.enterPackageName = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#packageName.
Java8ParserListener.prototype.exitPackageName = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#typeName.
Java8ParserListener.prototype.enterTypeName = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#typeName.
Java8ParserListener.prototype.exitTypeName = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#packageOrTypeName.
Java8ParserListener.prototype.enterPackageOrTypeName = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#packageOrTypeName.
Java8ParserListener.prototype.exitPackageOrTypeName = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#expressionName.
Java8ParserListener.prototype.enterExpressionName = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#expressionName.
Java8ParserListener.prototype.exitExpressionName = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#methodName.
Java8ParserListener.prototype.enterMethodName = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#methodName.
Java8ParserListener.prototype.exitMethodName = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#ambiguousName.
Java8ParserListener.prototype.enterAmbiguousName = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#ambiguousName.
Java8ParserListener.prototype.exitAmbiguousName = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#compilationUnit.
Java8ParserListener.prototype.enterCompilationUnit = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#compilationUnit.
Java8ParserListener.prototype.exitCompilationUnit = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#packageDeclaration.
Java8ParserListener.prototype.enterPackageDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#packageDeclaration.
Java8ParserListener.prototype.exitPackageDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#packageModifier.
Java8ParserListener.prototype.enterPackageModifier = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#packageModifier.
Java8ParserListener.prototype.exitPackageModifier = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#importDeclaration.
Java8ParserListener.prototype.enterImportDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#importDeclaration.
Java8ParserListener.prototype.exitImportDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#singleTypeImportDeclaration.
Java8ParserListener.prototype.enterSingleTypeImportDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#singleTypeImportDeclaration.
Java8ParserListener.prototype.exitSingleTypeImportDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#typeImportOnDemandDeclaration.
Java8ParserListener.prototype.enterTypeImportOnDemandDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#typeImportOnDemandDeclaration.
Java8ParserListener.prototype.exitTypeImportOnDemandDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#singleStaticImportDeclaration.
Java8ParserListener.prototype.enterSingleStaticImportDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#singleStaticImportDeclaration.
Java8ParserListener.prototype.exitSingleStaticImportDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#staticImportOnDemandDeclaration.
Java8ParserListener.prototype.enterStaticImportOnDemandDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#staticImportOnDemandDeclaration.
Java8ParserListener.prototype.exitStaticImportOnDemandDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#typeDeclaration.
Java8ParserListener.prototype.enterTypeDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#typeDeclaration.
Java8ParserListener.prototype.exitTypeDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#classDeclaration.
Java8ParserListener.prototype.enterClassDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#classDeclaration.
Java8ParserListener.prototype.exitClassDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#normalClassDeclaration.
Java8ParserListener.prototype.enterNormalClassDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#normalClassDeclaration.
Java8ParserListener.prototype.exitNormalClassDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#classModifier.
Java8ParserListener.prototype.enterClassModifier = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#classModifier.
Java8ParserListener.prototype.exitClassModifier = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#typeParameters.
Java8ParserListener.prototype.enterTypeParameters = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#typeParameters.
Java8ParserListener.prototype.exitTypeParameters = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#typeParameterList.
Java8ParserListener.prototype.enterTypeParameterList = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#typeParameterList.
Java8ParserListener.prototype.exitTypeParameterList = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#superclass.
Java8ParserListener.prototype.enterSuperclass = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#superclass.
Java8ParserListener.prototype.exitSuperclass = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#superinterfaces.
Java8ParserListener.prototype.enterSuperinterfaces = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#superinterfaces.
Java8ParserListener.prototype.exitSuperinterfaces = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#interfaceTypeList.
Java8ParserListener.prototype.enterInterfaceTypeList = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#interfaceTypeList.
Java8ParserListener.prototype.exitInterfaceTypeList = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#classBody.
Java8ParserListener.prototype.enterClassBody = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#classBody.
Java8ParserListener.prototype.exitClassBody = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#classBodyDeclaration.
Java8ParserListener.prototype.enterClassBodyDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#classBodyDeclaration.
Java8ParserListener.prototype.exitClassBodyDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#classMemberDeclaration.
Java8ParserListener.prototype.enterClassMemberDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#classMemberDeclaration.
Java8ParserListener.prototype.exitClassMemberDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#fieldDeclaration.
Java8ParserListener.prototype.enterFieldDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#fieldDeclaration.
Java8ParserListener.prototype.exitFieldDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#fieldModifier.
Java8ParserListener.prototype.enterFieldModifier = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#fieldModifier.
Java8ParserListener.prototype.exitFieldModifier = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#variableDeclaratorList.
Java8ParserListener.prototype.enterVariableDeclaratorList = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#variableDeclaratorList.
Java8ParserListener.prototype.exitVariableDeclaratorList = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#variableDeclarator.
Java8ParserListener.prototype.enterVariableDeclarator = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#variableDeclarator.
Java8ParserListener.prototype.exitVariableDeclarator = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#variableDeclaratorId.
Java8ParserListener.prototype.enterVariableDeclaratorId = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#variableDeclaratorId.
Java8ParserListener.prototype.exitVariableDeclaratorId = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#variableInitializer.
Java8ParserListener.prototype.enterVariableInitializer = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#variableInitializer.
Java8ParserListener.prototype.exitVariableInitializer = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#unannType.
Java8ParserListener.prototype.enterUnannType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#unannType.
Java8ParserListener.prototype.exitUnannType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#unannPrimitiveType.
Java8ParserListener.prototype.enterUnannPrimitiveType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#unannPrimitiveType.
Java8ParserListener.prototype.exitUnannPrimitiveType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#unannReferenceType.
Java8ParserListener.prototype.enterUnannReferenceType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#unannReferenceType.
Java8ParserListener.prototype.exitUnannReferenceType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#unannClassOrInterfaceType.
Java8ParserListener.prototype.enterUnannClassOrInterfaceType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#unannClassOrInterfaceType.
Java8ParserListener.prototype.exitUnannClassOrInterfaceType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#unannClassType.
Java8ParserListener.prototype.enterUnannClassType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#unannClassType.
Java8ParserListener.prototype.exitUnannClassType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#unannClassType_lf_unannClassOrInterfaceType.
Java8ParserListener.prototype.enterUnannClassType_lf_unannClassOrInterfaceType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#unannClassType_lf_unannClassOrInterfaceType.
Java8ParserListener.prototype.exitUnannClassType_lf_unannClassOrInterfaceType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#unannClassType_lfno_unannClassOrInterfaceType.
Java8ParserListener.prototype.enterUnannClassType_lfno_unannClassOrInterfaceType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#unannClassType_lfno_unannClassOrInterfaceType.
Java8ParserListener.prototype.exitUnannClassType_lfno_unannClassOrInterfaceType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#unannInterfaceType.
Java8ParserListener.prototype.enterUnannInterfaceType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#unannInterfaceType.
Java8ParserListener.prototype.exitUnannInterfaceType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#unannInterfaceType_lf_unannClassOrInterfaceType.
Java8ParserListener.prototype.enterUnannInterfaceType_lf_unannClassOrInterfaceType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#unannInterfaceType_lf_unannClassOrInterfaceType.
Java8ParserListener.prototype.exitUnannInterfaceType_lf_unannClassOrInterfaceType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#unannInterfaceType_lfno_unannClassOrInterfaceType.
Java8ParserListener.prototype.enterUnannInterfaceType_lfno_unannClassOrInterfaceType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#unannInterfaceType_lfno_unannClassOrInterfaceType.
Java8ParserListener.prototype.exitUnannInterfaceType_lfno_unannClassOrInterfaceType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#unannTypeVariable.
Java8ParserListener.prototype.enterUnannTypeVariable = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#unannTypeVariable.
Java8ParserListener.prototype.exitUnannTypeVariable = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#unannArrayType.
Java8ParserListener.prototype.enterUnannArrayType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#unannArrayType.
Java8ParserListener.prototype.exitUnannArrayType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#methodDeclaration.
Java8ParserListener.prototype.enterMethodDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#methodDeclaration.
Java8ParserListener.prototype.exitMethodDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#methodModifier.
Java8ParserListener.prototype.enterMethodModifier = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#methodModifier.
Java8ParserListener.prototype.exitMethodModifier = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#methodHeader.
Java8ParserListener.prototype.enterMethodHeader = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#methodHeader.
Java8ParserListener.prototype.exitMethodHeader = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#result.
Java8ParserListener.prototype.enterResult = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#result.
Java8ParserListener.prototype.exitResult = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#methodDeclarator.
Java8ParserListener.prototype.enterMethodDeclarator = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#methodDeclarator.
Java8ParserListener.prototype.exitMethodDeclarator = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#formalParameterList.
Java8ParserListener.prototype.enterFormalParameterList = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#formalParameterList.
Java8ParserListener.prototype.exitFormalParameterList = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#formalParameters.
Java8ParserListener.prototype.enterFormalParameters = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#formalParameters.
Java8ParserListener.prototype.exitFormalParameters = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#formalParameter.
Java8ParserListener.prototype.enterFormalParameter = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#formalParameter.
Java8ParserListener.prototype.exitFormalParameter = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#variableModifier.
Java8ParserListener.prototype.enterVariableModifier = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#variableModifier.
Java8ParserListener.prototype.exitVariableModifier = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#lastFormalParameter.
Java8ParserListener.prototype.enterLastFormalParameter = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#lastFormalParameter.
Java8ParserListener.prototype.exitLastFormalParameter = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#receiverParameter.
Java8ParserListener.prototype.enterReceiverParameter = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#receiverParameter.
Java8ParserListener.prototype.exitReceiverParameter = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#throws_.
Java8ParserListener.prototype.enterThrows_ = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#throws_.
Java8ParserListener.prototype.exitThrows_ = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#exceptionTypeList.
Java8ParserListener.prototype.enterExceptionTypeList = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#exceptionTypeList.
Java8ParserListener.prototype.exitExceptionTypeList = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#exceptionType.
Java8ParserListener.prototype.enterExceptionType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#exceptionType.
Java8ParserListener.prototype.exitExceptionType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#methodBody.
Java8ParserListener.prototype.enterMethodBody = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#methodBody.
Java8ParserListener.prototype.exitMethodBody = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#instanceInitializer.
Java8ParserListener.prototype.enterInstanceInitializer = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#instanceInitializer.
Java8ParserListener.prototype.exitInstanceInitializer = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#staticInitializer.
Java8ParserListener.prototype.enterStaticInitializer = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#staticInitializer.
Java8ParserListener.prototype.exitStaticInitializer = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#constructorDeclaration.
Java8ParserListener.prototype.enterConstructorDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#constructorDeclaration.
Java8ParserListener.prototype.exitConstructorDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#constructorModifier.
Java8ParserListener.prototype.enterConstructorModifier = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#constructorModifier.
Java8ParserListener.prototype.exitConstructorModifier = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#constructorDeclarator.
Java8ParserListener.prototype.enterConstructorDeclarator = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#constructorDeclarator.
Java8ParserListener.prototype.exitConstructorDeclarator = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#simpleTypeName.
Java8ParserListener.prototype.enterSimpleTypeName = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#simpleTypeName.
Java8ParserListener.prototype.exitSimpleTypeName = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#constructorBody.
Java8ParserListener.prototype.enterConstructorBody = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#constructorBody.
Java8ParserListener.prototype.exitConstructorBody = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#explicitConstructorInvocation.
Java8ParserListener.prototype.enterExplicitConstructorInvocation = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#explicitConstructorInvocation.
Java8ParserListener.prototype.exitExplicitConstructorInvocation = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#enumDeclaration.
Java8ParserListener.prototype.enterEnumDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#enumDeclaration.
Java8ParserListener.prototype.exitEnumDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#enumBody.
Java8ParserListener.prototype.enterEnumBody = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#enumBody.
Java8ParserListener.prototype.exitEnumBody = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#enumConstantList.
Java8ParserListener.prototype.enterEnumConstantList = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#enumConstantList.
Java8ParserListener.prototype.exitEnumConstantList = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#enumConstant.
Java8ParserListener.prototype.enterEnumConstant = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#enumConstant.
Java8ParserListener.prototype.exitEnumConstant = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#enumConstantModifier.
Java8ParserListener.prototype.enterEnumConstantModifier = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#enumConstantModifier.
Java8ParserListener.prototype.exitEnumConstantModifier = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#enumBodyDeclarations.
Java8ParserListener.prototype.enterEnumBodyDeclarations = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#enumBodyDeclarations.
Java8ParserListener.prototype.exitEnumBodyDeclarations = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#interfaceDeclaration.
Java8ParserListener.prototype.enterInterfaceDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#interfaceDeclaration.
Java8ParserListener.prototype.exitInterfaceDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#normalInterfaceDeclaration.
Java8ParserListener.prototype.enterNormalInterfaceDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#normalInterfaceDeclaration.
Java8ParserListener.prototype.exitNormalInterfaceDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#interfaceModifier.
Java8ParserListener.prototype.enterInterfaceModifier = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#interfaceModifier.
Java8ParserListener.prototype.exitInterfaceModifier = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#extendsInterfaces.
Java8ParserListener.prototype.enterExtendsInterfaces = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#extendsInterfaces.
Java8ParserListener.prototype.exitExtendsInterfaces = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#interfaceBody.
Java8ParserListener.prototype.enterInterfaceBody = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#interfaceBody.
Java8ParserListener.prototype.exitInterfaceBody = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#interfaceMemberDeclaration.
Java8ParserListener.prototype.enterInterfaceMemberDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#interfaceMemberDeclaration.
Java8ParserListener.prototype.exitInterfaceMemberDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#constantDeclaration.
Java8ParserListener.prototype.enterConstantDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#constantDeclaration.
Java8ParserListener.prototype.exitConstantDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#constantModifier.
Java8ParserListener.prototype.enterConstantModifier = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#constantModifier.
Java8ParserListener.prototype.exitConstantModifier = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#interfaceMethodDeclaration.
Java8ParserListener.prototype.enterInterfaceMethodDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#interfaceMethodDeclaration.
Java8ParserListener.prototype.exitInterfaceMethodDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#interfaceMethodModifier.
Java8ParserListener.prototype.enterInterfaceMethodModifier = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#interfaceMethodModifier.
Java8ParserListener.prototype.exitInterfaceMethodModifier = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#annotationTypeDeclaration.
Java8ParserListener.prototype.enterAnnotationTypeDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#annotationTypeDeclaration.
Java8ParserListener.prototype.exitAnnotationTypeDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#annotationTypeBody.
Java8ParserListener.prototype.enterAnnotationTypeBody = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#annotationTypeBody.
Java8ParserListener.prototype.exitAnnotationTypeBody = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#annotationTypeMemberDeclaration.
Java8ParserListener.prototype.enterAnnotationTypeMemberDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#annotationTypeMemberDeclaration.
Java8ParserListener.prototype.exitAnnotationTypeMemberDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#annotationTypeElementDeclaration.
Java8ParserListener.prototype.enterAnnotationTypeElementDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#annotationTypeElementDeclaration.
Java8ParserListener.prototype.exitAnnotationTypeElementDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#annotationTypeElementModifier.
Java8ParserListener.prototype.enterAnnotationTypeElementModifier = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#annotationTypeElementModifier.
Java8ParserListener.prototype.exitAnnotationTypeElementModifier = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#defaultValue.
Java8ParserListener.prototype.enterDefaultValue = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#defaultValue.
Java8ParserListener.prototype.exitDefaultValue = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#annotation.
Java8ParserListener.prototype.enterAnnotation = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#annotation.
Java8ParserListener.prototype.exitAnnotation = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#normalAnnotation.
Java8ParserListener.prototype.enterNormalAnnotation = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#normalAnnotation.
Java8ParserListener.prototype.exitNormalAnnotation = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#elementValuePairList.
Java8ParserListener.prototype.enterElementValuePairList = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#elementValuePairList.
Java8ParserListener.prototype.exitElementValuePairList = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#elementValuePair.
Java8ParserListener.prototype.enterElementValuePair = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#elementValuePair.
Java8ParserListener.prototype.exitElementValuePair = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#elementValue.
Java8ParserListener.prototype.enterElementValue = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#elementValue.
Java8ParserListener.prototype.exitElementValue = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#elementValueArrayInitializer.
Java8ParserListener.prototype.enterElementValueArrayInitializer = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#elementValueArrayInitializer.
Java8ParserListener.prototype.exitElementValueArrayInitializer = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#elementValueList.
Java8ParserListener.prototype.enterElementValueList = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#elementValueList.
Java8ParserListener.prototype.exitElementValueList = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#markerAnnotation.
Java8ParserListener.prototype.enterMarkerAnnotation = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#markerAnnotation.
Java8ParserListener.prototype.exitMarkerAnnotation = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#singleElementAnnotation.
Java8ParserListener.prototype.enterSingleElementAnnotation = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#singleElementAnnotation.
Java8ParserListener.prototype.exitSingleElementAnnotation = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#arrayInitializer.
Java8ParserListener.prototype.enterArrayInitializer = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#arrayInitializer.
Java8ParserListener.prototype.exitArrayInitializer = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#variableInitializerList.
Java8ParserListener.prototype.enterVariableInitializerList = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#variableInitializerList.
Java8ParserListener.prototype.exitVariableInitializerList = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#block.
Java8ParserListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#block.
Java8ParserListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#blockStatements.
Java8ParserListener.prototype.enterBlockStatements = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#blockStatements.
Java8ParserListener.prototype.exitBlockStatements = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#blockStatement.
Java8ParserListener.prototype.enterBlockStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#blockStatement.
Java8ParserListener.prototype.exitBlockStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#localVariableDeclarationStatement.
Java8ParserListener.prototype.enterLocalVariableDeclarationStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#localVariableDeclarationStatement.
Java8ParserListener.prototype.exitLocalVariableDeclarationStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#localVariableDeclaration.
Java8ParserListener.prototype.enterLocalVariableDeclaration = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#localVariableDeclaration.
Java8ParserListener.prototype.exitLocalVariableDeclaration = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#statement.
Java8ParserListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#statement.
Java8ParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#statementNoShortIf.
Java8ParserListener.prototype.enterStatementNoShortIf = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#statementNoShortIf.
Java8ParserListener.prototype.exitStatementNoShortIf = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#statementWithoutTrailingSubstatement.
Java8ParserListener.prototype.enterStatementWithoutTrailingSubstatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#statementWithoutTrailingSubstatement.
Java8ParserListener.prototype.exitStatementWithoutTrailingSubstatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#emptyStatement.
Java8ParserListener.prototype.enterEmptyStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#emptyStatement.
Java8ParserListener.prototype.exitEmptyStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#labeledStatement.
Java8ParserListener.prototype.enterLabeledStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#labeledStatement.
Java8ParserListener.prototype.exitLabeledStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#labeledStatementNoShortIf.
Java8ParserListener.prototype.enterLabeledStatementNoShortIf = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#labeledStatementNoShortIf.
Java8ParserListener.prototype.exitLabeledStatementNoShortIf = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#expressionStatement.
Java8ParserListener.prototype.enterExpressionStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#expressionStatement.
Java8ParserListener.prototype.exitExpressionStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#statementExpression.
Java8ParserListener.prototype.enterStatementExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#statementExpression.
Java8ParserListener.prototype.exitStatementExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#ifThenStatement.
Java8ParserListener.prototype.enterIfThenStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#ifThenStatement.
Java8ParserListener.prototype.exitIfThenStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#ifThenElseStatement.
Java8ParserListener.prototype.enterIfThenElseStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#ifThenElseStatement.
Java8ParserListener.prototype.exitIfThenElseStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#ifThenElseStatementNoShortIf.
Java8ParserListener.prototype.enterIfThenElseStatementNoShortIf = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#ifThenElseStatementNoShortIf.
Java8ParserListener.prototype.exitIfThenElseStatementNoShortIf = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#assertStatement.
Java8ParserListener.prototype.enterAssertStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#assertStatement.
Java8ParserListener.prototype.exitAssertStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#switchStatement.
Java8ParserListener.prototype.enterSwitchStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#switchStatement.
Java8ParserListener.prototype.exitSwitchStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#switchBlock.
Java8ParserListener.prototype.enterSwitchBlock = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#switchBlock.
Java8ParserListener.prototype.exitSwitchBlock = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#switchBlockStatementGroup.
Java8ParserListener.prototype.enterSwitchBlockStatementGroup = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#switchBlockStatementGroup.
Java8ParserListener.prototype.exitSwitchBlockStatementGroup = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#switchLabels.
Java8ParserListener.prototype.enterSwitchLabels = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#switchLabels.
Java8ParserListener.prototype.exitSwitchLabels = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#switchLabel.
Java8ParserListener.prototype.enterSwitchLabel = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#switchLabel.
Java8ParserListener.prototype.exitSwitchLabel = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#enumConstantName.
Java8ParserListener.prototype.enterEnumConstantName = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#enumConstantName.
Java8ParserListener.prototype.exitEnumConstantName = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#whileStatement.
Java8ParserListener.prototype.enterWhileStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#whileStatement.
Java8ParserListener.prototype.exitWhileStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#whileStatementNoShortIf.
Java8ParserListener.prototype.enterWhileStatementNoShortIf = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#whileStatementNoShortIf.
Java8ParserListener.prototype.exitWhileStatementNoShortIf = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#doStatement.
Java8ParserListener.prototype.enterDoStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#doStatement.
Java8ParserListener.prototype.exitDoStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#forStatement.
Java8ParserListener.prototype.enterForStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#forStatement.
Java8ParserListener.prototype.exitForStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#forStatementNoShortIf.
Java8ParserListener.prototype.enterForStatementNoShortIf = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#forStatementNoShortIf.
Java8ParserListener.prototype.exitForStatementNoShortIf = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#basicForStatement.
Java8ParserListener.prototype.enterBasicForStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#basicForStatement.
Java8ParserListener.prototype.exitBasicForStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#basicForStatementNoShortIf.
Java8ParserListener.prototype.enterBasicForStatementNoShortIf = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#basicForStatementNoShortIf.
Java8ParserListener.prototype.exitBasicForStatementNoShortIf = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#forInit.
Java8ParserListener.prototype.enterForInit = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#forInit.
Java8ParserListener.prototype.exitForInit = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#forUpdate.
Java8ParserListener.prototype.enterForUpdate = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#forUpdate.
Java8ParserListener.prototype.exitForUpdate = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#statementExpressionList.
Java8ParserListener.prototype.enterStatementExpressionList = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#statementExpressionList.
Java8ParserListener.prototype.exitStatementExpressionList = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#enhancedForStatement.
Java8ParserListener.prototype.enterEnhancedForStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#enhancedForStatement.
Java8ParserListener.prototype.exitEnhancedForStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#enhancedForStatementNoShortIf.
Java8ParserListener.prototype.enterEnhancedForStatementNoShortIf = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#enhancedForStatementNoShortIf.
Java8ParserListener.prototype.exitEnhancedForStatementNoShortIf = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#breakStatement.
Java8ParserListener.prototype.enterBreakStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#breakStatement.
Java8ParserListener.prototype.exitBreakStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#continueStatement.
Java8ParserListener.prototype.enterContinueStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#continueStatement.
Java8ParserListener.prototype.exitContinueStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#returnStatement.
Java8ParserListener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#returnStatement.
Java8ParserListener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#throwStatement.
Java8ParserListener.prototype.enterThrowStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#throwStatement.
Java8ParserListener.prototype.exitThrowStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#synchronizedStatement.
Java8ParserListener.prototype.enterSynchronizedStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#synchronizedStatement.
Java8ParserListener.prototype.exitSynchronizedStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#tryStatement.
Java8ParserListener.prototype.enterTryStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#tryStatement.
Java8ParserListener.prototype.exitTryStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#catches.
Java8ParserListener.prototype.enterCatches = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#catches.
Java8ParserListener.prototype.exitCatches = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#catchClause.
Java8ParserListener.prototype.enterCatchClause = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#catchClause.
Java8ParserListener.prototype.exitCatchClause = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#catchFormalParameter.
Java8ParserListener.prototype.enterCatchFormalParameter = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#catchFormalParameter.
Java8ParserListener.prototype.exitCatchFormalParameter = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#catchType.
Java8ParserListener.prototype.enterCatchType = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#catchType.
Java8ParserListener.prototype.exitCatchType = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#finally_.
Java8ParserListener.prototype.enterFinally_ = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#finally_.
Java8ParserListener.prototype.exitFinally_ = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#tryWithResourcesStatement.
Java8ParserListener.prototype.enterTryWithResourcesStatement = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#tryWithResourcesStatement.
Java8ParserListener.prototype.exitTryWithResourcesStatement = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#resourceSpecification.
Java8ParserListener.prototype.enterResourceSpecification = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#resourceSpecification.
Java8ParserListener.prototype.exitResourceSpecification = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#resourceList.
Java8ParserListener.prototype.enterResourceList = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#resourceList.
Java8ParserListener.prototype.exitResourceList = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#resource.
Java8ParserListener.prototype.enterResource = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#resource.
Java8ParserListener.prototype.exitResource = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#primary.
Java8ParserListener.prototype.enterPrimary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#primary.
Java8ParserListener.prototype.exitPrimary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#primaryNoNewArray.
Java8ParserListener.prototype.enterPrimaryNoNewArray = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#primaryNoNewArray.
Java8ParserListener.prototype.exitPrimaryNoNewArray = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#primaryNoNewArray_lf_arrayAccess.
Java8ParserListener.prototype.enterPrimaryNoNewArray_lf_arrayAccess = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#primaryNoNewArray_lf_arrayAccess.
Java8ParserListener.prototype.exitPrimaryNoNewArray_lf_arrayAccess = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#primaryNoNewArray_lfno_arrayAccess.
Java8ParserListener.prototype.enterPrimaryNoNewArray_lfno_arrayAccess = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#primaryNoNewArray_lfno_arrayAccess.
Java8ParserListener.prototype.exitPrimaryNoNewArray_lfno_arrayAccess = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#primaryNoNewArray_lf_primary.
Java8ParserListener.prototype.enterPrimaryNoNewArray_lf_primary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#primaryNoNewArray_lf_primary.
Java8ParserListener.prototype.exitPrimaryNoNewArray_lf_primary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary.
Java8ParserListener.prototype.enterPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary.
Java8ParserListener.prototype.exitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary.
Java8ParserListener.prototype.enterPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary.
Java8ParserListener.prototype.exitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#primaryNoNewArray_lfno_primary.
Java8ParserListener.prototype.enterPrimaryNoNewArray_lfno_primary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#primaryNoNewArray_lfno_primary.
Java8ParserListener.prototype.exitPrimaryNoNewArray_lfno_primary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary.
Java8ParserListener.prototype.enterPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary.
Java8ParserListener.prototype.exitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary.
Java8ParserListener.prototype.enterPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary.
Java8ParserListener.prototype.exitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#classInstanceCreationExpression.
Java8ParserListener.prototype.enterClassInstanceCreationExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#classInstanceCreationExpression.
Java8ParserListener.prototype.exitClassInstanceCreationExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#classInstanceCreationExpression_lf_primary.
Java8ParserListener.prototype.enterClassInstanceCreationExpression_lf_primary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#classInstanceCreationExpression_lf_primary.
Java8ParserListener.prototype.exitClassInstanceCreationExpression_lf_primary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#classInstanceCreationExpression_lfno_primary.
Java8ParserListener.prototype.enterClassInstanceCreationExpression_lfno_primary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#classInstanceCreationExpression_lfno_primary.
Java8ParserListener.prototype.exitClassInstanceCreationExpression_lfno_primary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#typeArgumentsOrDiamond.
Java8ParserListener.prototype.enterTypeArgumentsOrDiamond = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#typeArgumentsOrDiamond.
Java8ParserListener.prototype.exitTypeArgumentsOrDiamond = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#fieldAccess.
Java8ParserListener.prototype.enterFieldAccess = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#fieldAccess.
Java8ParserListener.prototype.exitFieldAccess = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#fieldAccess_lf_primary.
Java8ParserListener.prototype.enterFieldAccess_lf_primary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#fieldAccess_lf_primary.
Java8ParserListener.prototype.exitFieldAccess_lf_primary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#fieldAccess_lfno_primary.
Java8ParserListener.prototype.enterFieldAccess_lfno_primary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#fieldAccess_lfno_primary.
Java8ParserListener.prototype.exitFieldAccess_lfno_primary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#arrayAccess.
Java8ParserListener.prototype.enterArrayAccess = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#arrayAccess.
Java8ParserListener.prototype.exitArrayAccess = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#arrayAccess_lf_primary.
Java8ParserListener.prototype.enterArrayAccess_lf_primary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#arrayAccess_lf_primary.
Java8ParserListener.prototype.exitArrayAccess_lf_primary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#arrayAccess_lfno_primary.
Java8ParserListener.prototype.enterArrayAccess_lfno_primary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#arrayAccess_lfno_primary.
Java8ParserListener.prototype.exitArrayAccess_lfno_primary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#methodInvocation.
Java8ParserListener.prototype.enterMethodInvocation = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#methodInvocation.
Java8ParserListener.prototype.exitMethodInvocation = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#methodInvocation_lf_primary.
Java8ParserListener.prototype.enterMethodInvocation_lf_primary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#methodInvocation_lf_primary.
Java8ParserListener.prototype.exitMethodInvocation_lf_primary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#methodInvocation_lfno_primary.
Java8ParserListener.prototype.enterMethodInvocation_lfno_primary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#methodInvocation_lfno_primary.
Java8ParserListener.prototype.exitMethodInvocation_lfno_primary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#argumentList.
Java8ParserListener.prototype.enterArgumentList = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#argumentList.
Java8ParserListener.prototype.exitArgumentList = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#methodReference.
Java8ParserListener.prototype.enterMethodReference = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#methodReference.
Java8ParserListener.prototype.exitMethodReference = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#methodReference_lf_primary.
Java8ParserListener.prototype.enterMethodReference_lf_primary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#methodReference_lf_primary.
Java8ParserListener.prototype.exitMethodReference_lf_primary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#methodReference_lfno_primary.
Java8ParserListener.prototype.enterMethodReference_lfno_primary = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#methodReference_lfno_primary.
Java8ParserListener.prototype.exitMethodReference_lfno_primary = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#arrayCreationExpression.
Java8ParserListener.prototype.enterArrayCreationExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#arrayCreationExpression.
Java8ParserListener.prototype.exitArrayCreationExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#dimExprs.
Java8ParserListener.prototype.enterDimExprs = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#dimExprs.
Java8ParserListener.prototype.exitDimExprs = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#dimExpr.
Java8ParserListener.prototype.enterDimExpr = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#dimExpr.
Java8ParserListener.prototype.exitDimExpr = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#constantExpression.
Java8ParserListener.prototype.enterConstantExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#constantExpression.
Java8ParserListener.prototype.exitConstantExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#expression.
Java8ParserListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#expression.
Java8ParserListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#lambdaExpression.
Java8ParserListener.prototype.enterLambdaExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#lambdaExpression.
Java8ParserListener.prototype.exitLambdaExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#lambdaParameters.
Java8ParserListener.prototype.enterLambdaParameters = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#lambdaParameters.
Java8ParserListener.prototype.exitLambdaParameters = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#inferredFormalParameterList.
Java8ParserListener.prototype.enterInferredFormalParameterList = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#inferredFormalParameterList.
Java8ParserListener.prototype.exitInferredFormalParameterList = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#lambdaBody.
Java8ParserListener.prototype.enterLambdaBody = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#lambdaBody.
Java8ParserListener.prototype.exitLambdaBody = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#assignmentExpression.
Java8ParserListener.prototype.enterAssignmentExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#assignmentExpression.
Java8ParserListener.prototype.exitAssignmentExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#assignment.
Java8ParserListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#assignment.
Java8ParserListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#leftHandSide.
Java8ParserListener.prototype.enterLeftHandSide = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#leftHandSide.
Java8ParserListener.prototype.exitLeftHandSide = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#assignmentOperator.
Java8ParserListener.prototype.enterAssignmentOperator = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#assignmentOperator.
Java8ParserListener.prototype.exitAssignmentOperator = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#conditionalExpression.
Java8ParserListener.prototype.enterConditionalExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#conditionalExpression.
Java8ParserListener.prototype.exitConditionalExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#conditionalOrExpression.
Java8ParserListener.prototype.enterConditionalOrExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#conditionalOrExpression.
Java8ParserListener.prototype.exitConditionalOrExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#conditionalAndExpression.
Java8ParserListener.prototype.enterConditionalAndExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#conditionalAndExpression.
Java8ParserListener.prototype.exitConditionalAndExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#inclusiveOrExpression.
Java8ParserListener.prototype.enterInclusiveOrExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#inclusiveOrExpression.
Java8ParserListener.prototype.exitInclusiveOrExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#exclusiveOrExpression.
Java8ParserListener.prototype.enterExclusiveOrExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#exclusiveOrExpression.
Java8ParserListener.prototype.exitExclusiveOrExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#andExpression.
Java8ParserListener.prototype.enterAndExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#andExpression.
Java8ParserListener.prototype.exitAndExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#equalityExpression.
Java8ParserListener.prototype.enterEqualityExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#equalityExpression.
Java8ParserListener.prototype.exitEqualityExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#relationalExpression.
Java8ParserListener.prototype.enterRelationalExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#relationalExpression.
Java8ParserListener.prototype.exitRelationalExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#shiftExpression.
Java8ParserListener.prototype.enterShiftExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#shiftExpression.
Java8ParserListener.prototype.exitShiftExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#additiveExpression.
Java8ParserListener.prototype.enterAdditiveExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#additiveExpression.
Java8ParserListener.prototype.exitAdditiveExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#multiplicativeExpression.
Java8ParserListener.prototype.enterMultiplicativeExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#multiplicativeExpression.
Java8ParserListener.prototype.exitMultiplicativeExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#unaryExpression.
Java8ParserListener.prototype.enterUnaryExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#unaryExpression.
Java8ParserListener.prototype.exitUnaryExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#preIncrementExpression.
Java8ParserListener.prototype.enterPreIncrementExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#preIncrementExpression.
Java8ParserListener.prototype.exitPreIncrementExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#preDecrementExpression.
Java8ParserListener.prototype.enterPreDecrementExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#preDecrementExpression.
Java8ParserListener.prototype.exitPreDecrementExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#unaryExpressionNotPlusMinus.
Java8ParserListener.prototype.enterUnaryExpressionNotPlusMinus = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#unaryExpressionNotPlusMinus.
Java8ParserListener.prototype.exitUnaryExpressionNotPlusMinus = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#postfixExpression.
Java8ParserListener.prototype.enterPostfixExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#postfixExpression.
Java8ParserListener.prototype.exitPostfixExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#postIncrementExpression.
Java8ParserListener.prototype.enterPostIncrementExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#postIncrementExpression.
Java8ParserListener.prototype.exitPostIncrementExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#postIncrementExpression_lf_postfixExpression.
Java8ParserListener.prototype.enterPostIncrementExpression_lf_postfixExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#postIncrementExpression_lf_postfixExpression.
Java8ParserListener.prototype.exitPostIncrementExpression_lf_postfixExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#postDecrementExpression.
Java8ParserListener.prototype.enterPostDecrementExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#postDecrementExpression.
Java8ParserListener.prototype.exitPostDecrementExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#postDecrementExpression_lf_postfixExpression.
Java8ParserListener.prototype.enterPostDecrementExpression_lf_postfixExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#postDecrementExpression_lf_postfixExpression.
Java8ParserListener.prototype.exitPostDecrementExpression_lf_postfixExpression = function(ctx) {
};


// Enter a parse tree produced by Java8Parser#castExpression.
Java8ParserListener.prototype.enterCastExpression = function(ctx) {
};

// Exit a parse tree produced by Java8Parser#castExpression.
Java8ParserListener.prototype.exitCastExpression = function(ctx) {
};



exports.Java8ParserListener = Java8ParserListener;