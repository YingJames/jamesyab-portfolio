import { Label, TextInput, Textarea, Button } from 'flowbite-react';
import { HiMail, HiUser } from 'react-icons/hi';

export default function ContactForm() {
    return (
        <>
            <form className="flex flex-col gap-4">
                <div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Name"
                        />
                    </div>
                    <TextInput
                        className="mb-2"
                        id="name"
                        icon={HiUser}
                        placeholder="John Doe"
                        required={true}
                    />
                </div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Email"
                        />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        icon={HiMail}
                        placeholder="name@email.com"
                        required={true}
                    />
                </div>
                <div id="textarea">
                <div className="mb-2 block">
                    <Label
                    htmlFor="message"
                    value="Message"
                    />
                </div>
                <Textarea
                    id="message"
                    placeholder="Message"
                    required={true}
                    rows={4}
                />
                </div>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </>
    )
}