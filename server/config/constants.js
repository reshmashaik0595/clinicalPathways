const SERVER = {
    NON_SSL_PORT: 3001,
    DATABASE_NAME: 'ClinicalPathway'
}

const MESSAGE = {
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

// const USER_DEFAULT_DATA = {
//     firstName: 'User',
//     lastName: 'Name',
//     userName: 'user',
//     password: 'User@123',
//     emailId: 'user@flemingcollege.ca',
//     mobile: '9999999999'
// }

module.exports = {
    SERVER,
    MESSAGE,
    ADMIN_DEFAULT_DATA,
    // USER_DEFAULT_DATA
    EMAIL
}
