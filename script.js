function handleSend(){
      const name = document.getElementById('name').value.trim();
      const company = document.getElementById('company').value.trim();
      const email = document.getElementById('email').value.trim();
      const interest = document.getElementById('interest').value;
      const message = document.getElementById('message').value.trim();
      const feedback = document.getElementById('feedback');

      if(!name || !company || !email){
        feedback.style.color = '#ffb4b4';
        feedback.textContent = 'Please complete the required fields.';
        return;
      }

      // Fallback behaviour: generate mailto link (no backend)
      const subject = encodeURIComponent('Synapse UpSkill Enquiry: ' + interest + ' - ' + company);
      const body = encodeURIComponent('Name: ' + name + '\nCompany: ' + company + '\nEmail: ' + email + '\n\nMessage:\n' + message);
      const mailto = 'mailto:hello@synapseupskill.example?subject=' + subject + '&body=' + body;
      // Open mail client
      window.open(mailto, '_self');
      feedback.style.color = 'var(--accent)';
      feedback.textContent = 'Your enquiry has opened in your email client. Send the message to complete the enquiry.';
    }
