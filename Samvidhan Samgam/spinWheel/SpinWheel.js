document.getElementById('spinButton').addEventListener('click', function() {
    // Remove any existing blink classes from previous spins
    document.querySelectorAll('.segment').forEach(segment => {
        segment.classList.remove('blink');
    });

    // Get the wheel element
    const wheel = document.getElementById('wheel');

    // Random rotation angle between 2000 and 5000 degrees
    const randomRotation = Math.floor(Math.random() * 3000) + 2000;

    // Apply rotation to the wheel
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // Determine the segment on which the wheel stops
    setTimeout(() => {
        const segments = document.querySelectorAll('.segment');
        const segmentAngle = 360 / segments.length;
        const currentRotation = randomRotation % 360;
        const selectedSegmentIndex = Math.floor((360 - currentRotation) / segmentAngle) % segments.length;
        const selectedSegment = segments[selectedSegmentIndex];
        
        // Map each segment text to its URL
        const segmentLinks = {
            'Legislature': 'https://example.com/legislature',
            'Executive': 'https://example.com/executive',
            'Judiciary': 'https://example.com/judiciary',
            'Fundamental Rights': 'https://example.com/fundamental-rights',
            'Duties': 'https://example.com/duties',
            'Amendments': 'https://example.com/amendments'
        };

        const segmentText = selectedSegment.textContent.trim();
        const segmentURL = segmentLinks[segmentText] || '#';

        // Add blink class to the selected segment
        selectedSegment.classList.add('blink');

        // Display the result with a hyperlink
        document.getElementById('result').innerHTML = `You landed on: <a href="${segmentURL}" target="_blank">${segmentText}</a>`;
    }, 4000); // Matches the transition duration of 4 seconds
});
