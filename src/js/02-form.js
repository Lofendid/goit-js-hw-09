
const feedbackForm = document.querySelector('.feedback-form');

const userEmail = feedbackForm.querySelector('input[type="email"]');
userEmail.value = '';

const userMessage = feedbackForm.querySelector('textarea');
userMessage.value = '';

const userFeedback = {};

const LS_FEEDBACK = 'feedback-form-state';

if (localStorage.getItem(LS_FEEDBACK)) {
    const parsedFeedback = JSON.parse(localStorage.getItem(LS_FEEDBACK));

    // ЧИ МОЖНО ТАКИМ:
    userEmail.value = userFeedback.email = parsedFeedback.email;
    userMessage.value = userFeedback.message = parsedFeedback.message;
    // ЧИНОМ ПРИСВОЮВАТИ ОДРАЗУ ДВОМ ЗМІННИМ ЗНАЧЕННЯ, ЧИ НЕ БАЖАНО?
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


