import React from 'react';
import { Alert } from 'flowbite-react';
import { useForm, ValidationError } from '@formspree/react';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';
import { HiMail, HiUser } from 'react-icons/hi';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xeqwnrja");

    function SuccessAlert() {
        return (
            <Alert className="my-3" color="success" onDismiss={function onDismiss() { return <ContactForm /> }}
            >
                <span>
                    <span className="font-bold">
                        Message sent!
                    </span>
                    {' '}Thank you for messaging. I will get back to you as soon as possible.
                </span>
            </Alert>
        )
    }
    
    if (state.succeeded) {
        return <SuccessAlert />
    }

    return (
        <>  
            <form className="flex flex-col gap-4 my-3" onSubmit={handleSubmit}>
                <Label htmlFor="name">Name</Label>
                <TextInput
                    id="name"
                    type="text"
                    name="name"
                    icon={HiUser}
                    placeholder="First and Last name"
                    required={true}
                />

                <Label htmlFor="email">
                    Email Address
                </Label>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    icon={HiMail}
                    placeholder="name@email.com"
                    required={true}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />

                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    required={true}
                    rows={3}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

                <Button type="submit" disabled={state.submitting}>
                    Submit
                </Button>
            </form>
        </>
    )
}