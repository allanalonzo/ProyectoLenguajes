self.onmessage = function(e) {
    const { inputString, baseString } = e.data;

    function isValid(input, pattern) {
        let i = 0, j = 0;

        while (i < input.length && j < pattern.length) {
            if (pattern[j] === '*') {
                if (j === pattern.length - 1) {
                    return true; // '*' al final del patrón, todo lo que sigue es válido
                }
                while (i < input.length && input[i] === pattern[j - 1]) {
                    i++;
                }
                j++;
            } else if (input[i] === pattern[j]) {
                i++;
                j++;
            } else {
                return false;
            }
        }

        return i === input.length && j === pattern.length;
    }

    const isCompleteValid = isValid(inputString, baseString);
    self.postMessage(isCompleteValid);
};
