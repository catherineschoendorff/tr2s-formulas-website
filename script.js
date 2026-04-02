document.addEventListener('DOMContentLoaded', function() {
    // Initialize all formula headers
    const headers = document.querySelectorAll('.formula-header, .subsection-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const content = document.getElementById(sectionId);

            if (content) {
                const isVisible = content.style.display !== 'none';
                content.style.display = isVisible ? 'none' : 'block';
                this.classList.toggle('active');

                // Trigger MathJax to re-render if needed
                if (window.MathJax) {
                    MathJax.typesetPromise([content]).catch(err => console.log(err));
                }
            }
        });
    });
});
