document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('donation-form');
    const responseDiv = document.getElementById('response-message');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const amount = document.getElementById('amount').value.trim();
  
      const donationData = { name, email, amount };
  
      try {
        const response = await fetch('http://localhost:5000/donate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(donationData),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          responseDiv.innerText = result.message;
          form.reset();
        } else {
          responseDiv.innerText = result.error || 'Something went wrong!';
        }
  
      } catch (error) {
        console.error('Error:', error);
        responseDiv.innerText = 'Failed to donate.';
      }
    });
  });
  