const SERVER = {
    NON_SSL_PORT: 3001,
    DATABASE_NAME: 'ClinicalPathway'
}

const MESSAGE = {
    INVALID_USER: "User/Id not found",
    INVALID_QUERY: "Invalid Query",
    USER_CREATE: {
        SUCCESS: 'User(s) created successfully',
        FAILED: 'Failed to create user(s)'
    },
    USER_READ: {
        SUCCESS: 'User(s) fetched successfully',
        FAILED: 'Failed to fetch user(s)'
    },
    USER_UDPATE: {
        SUCCESS: 'User updated successfully',
        FAILED: 'Failed to update user'
    },
    FEEDBACK_CREATE: {
        SUCCESS: 'Feedback(s) created successfully',
        FAILED: 'Failed to create feedback(s)'
    },
    FEEDBACK_READ: {
        SUCCESS: 'Feedback(s) fetched successfully',
        FAILED: 'Failed to fetch feedback(s)'
    },
    FEEDBACK_UDPATE: {
        SUCCESS: 'Feedback updated successfully',
        FAILED: 'Failed to update feedback'
    },
    FEEDBACK_DELETE: {
        SUCCESS: 'Feedback deleted successfully',
        FAILED: 'Failed to deleted feedback'
    },
    LOGIN: {
        SUCCESS: 'Login successful',
        FAILED: 'Login failed',
        INVALID_PASSWORD: 'Invalid password (or) Please enter a valid password',
        APPROVAL_STATUS_REJECT: 'Your approval status is "REJECTED" in state. Please contact administator for more details.',
        APPROVAL_STATUS_PENDING: 'Your approval status is "PENDING" in state. Please contact administator for more details.',
        INVALID_USER_NAME: 'Invalid username (or) Please enter a valid username'
    },

}

const EMAIL = {
    DONOT_REPLY_EMAIL_ID: 'reshmashaik0595@gmail.com', // To be updated later
    ADMIN_EMAIL_ID: 'reshmashaik0595@gmail.com', // To be updated later
    AUTH_EMAIL_ID: 'reshmashaik0595@gmail.com', // To be updated later
    AUTH_APP_PASSWORD: 'rmemexmoogwfhqeq', // To be updated later
    EMAIL_SERVICE: 'gmail',
    APPLICATION_URL: 'http://localhost:4200' // To be updated later
}

const ADMIN_DEFAULT_DATA = {
    firstName: 'Admin',
    lastName: 'Name',
    userName: 'admin',
    password: 'Admin@123',
    emailId: 'reshmashaik462@gmail.com',
    designation: 'Admin',
    govtIDNumber: "admin",
    approvalStatus: "APPROVED",
    mobile: '0000000000'
}

const ON_LOAD_FEEDBACK_QUESTIONS = [
    {
        generalFeedback: false,
        question: "Do you have an edit or update to suggest to an existing Roadmap ?"
    },
    {
        generalFeedback: true,
        question: "Do you have general feedback on RoadmapsPTBO ?"
    }
]

module.exports = {
    SERVER,
    MESSAGE,
    ADMIN_DEFAULT_DATA,
    ON_LOAD_FEEDBACK_QUESTIONS,
    EMAIL
}
