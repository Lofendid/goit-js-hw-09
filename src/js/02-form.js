const feedbackForm = document.querySelector('.feedback-form');

const userEmail = feedbackForm.querySelector('input[type="email"]');

const userMessage = feedbackForm.querySelector('textarea');

const userFeedback = {
    email: '',
    message: '',
};

let parsedFeedback;

const LS_FEEDBACK = 'feedback-form-state';

if (localStorage.getItem(LS_FEEDBACK)) {
    parsedFeedback = JSON.parse(localStorage.getItem(LS_FEEDBACK));

    // Чи можно таким чином:
    userEmail.value = userFeedback.email = parsedFeedback.email;
    userMessage.value = userFeedback.message = parsedFeedback.message;
    // Присвоювати значення одразу двом змінним, чи не бажано?

};

const handleInput = (e) => {
    if (e.target.name === 'email') userFeedback.email = e.target.value;
    if (e.target.name === 'message') userFeedback.message = e.target.value;
    const strUserFeedback = JSON.stringify(userFeedback);
    localStorage.setItem(LS_FEEDBACK, strUserFeedback);
    if (userFeedback.email === '' && userFeedback.message === '') { 
        localStorage.removeItem(LS_FEEDBACK);
    }; 
};

const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(LS_FEEDBACK);
};

feedbackForm.addEventListener('input', handleInput);
feedbackForm.addEventListener('submit', handleSubmit);






