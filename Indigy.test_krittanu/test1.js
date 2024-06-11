let pyramid = '';

        for (let i = 1; i <= rows; i++) {
            // Add leading spaces
            for (let j = 0; j < rows - i; j++) {
                pyramid += ' ';
            }
            // Add numbers
            for (let k = 0; k < i; k++) {
                pyramid += i;
                if (k < i - 1) pyramid += ' ';
            }
            // New line
            pyramid += '\n';
        }
        
console.log(pyramid)
