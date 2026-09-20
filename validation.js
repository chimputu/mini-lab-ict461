document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        // Prevent default submission for this front-end demo
        event.preventDefault(); 
        
        let isValid = true;

        // Helper function to show/hide errors and apply CSS classes
        function validateField(inputId, errorId, condition) {
            const input = document.getElementById(inputId);
            const error = document.getElementById(errorId);
            
            if (condition) {
                error.style.display = 'block';
                input.classList.add('input-error');
                isValid = false;
            } else {
                error.style.display = 'none';
                input.classList.remove('input-error');
            }
        }

        // 1. Validate Name (not empty, min length 2)
        const name = document.getElementById('fullName').value.trim();
        validateField('fullName', 'nameError', name.length < 2);

        // 2. Validate Student ID (matches pattern: 5-10 alphanumeric)
        const studentId = document.getElementById('studentId').value.trim();
        const idPattern = /^[A-Za-z0-9]{5,10}$/;
        validateField('studentId', 'idError', !idPattern.test(studentId));

        // 3. Validate Programme (not empty)
        const programme = document.getElementById('programme').value.trim();
        validateField('programme', 'programmeError', programme === '');

        // 4. Validate Course (not empty)
        const course = document.getElementById('course').value.trim();
        validateField('course', 'courseError', course === '');

        // If everything is valid, simulate a successful submission
        if (isValid) {
            const btn = document.querySelector('.submit-btn');
            const originalText = btn.innerHTML;
            
            // Visual feedback: Loading state
            btn.innerHTML = '<span>Processing...</span>';
            btn.style.opacity = '0.7';
            btn.style.pointerEvents = 'none';

            // Simulate a network request delay
            setTimeout(() => {
                alert("Registration successful! (Front-end validation passed)");
                
                // Reset button
                btn.innerHTML = originalText;
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
                
                // Optionally reset the form
                // form.reset(); 
            }, 1000);
        }
    });

    // Real-time validation: Clear error state when user starts typing
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.classList.contains('input-error')) {
                this.classList.remove('input-error');
                const errorSpan = this.closest('.form-group').querySelector('.error-message');
                if (errorSpan) errorSpan.style.display = 'none';
            }
        });
    });
});