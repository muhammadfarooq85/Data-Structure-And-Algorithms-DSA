# 1021. Remove Outermost Parenthesis

def removeOuterParentheses(s: str) -> str:
    result = []
    depth = 0
    
    for char in s:
        if char == '(':
            if depth > 0:  # We only add the `(` if it's not the outermost
                result.append(char)
            depth += 1
        elif char == ')':
            depth -= 1
            if depth > 0:  # We only add the `)` if it's not the outermost
                result.append(char)
    
    return ''.join(result)


print(removeOuterParentheses("(((())))")) # ((()))