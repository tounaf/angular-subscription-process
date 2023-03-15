interface Subscription {

    clientSubscriptions: ClientSubscription[];
    upfront: string;
    payment: Payment;
    user: User;


    // steps : 1
    // {
    // Duration,
    // Amount of gigabytes in a cloud,
    // Upfront payment
    // }

    // steps : 2
    // {
    // Credit card number,
    // Credit card expiration date,
    // Credit card security code
    // }

    // steps : 3
    // {
    // Summary of the selected subscription including total price and price per GB.
    // Email of the user
    // Terms and conditions agreement checkbox
    // Confirmation button
    // }

}