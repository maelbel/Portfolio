import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
    Tailwind,
  } from "@react-email/components";

interface MailProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const MailUI: React.FC<Readonly<MailProps>> = ({ name, email, subject, message }) => {
    return (
        <Html>
            <Head />
            <Preview>{email}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans px-2">
                <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                    <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                    Join <strong>{name}</strong> on <strong>Vercel</strong>
                    </Heading>
                    <Text className="text-black text-[14px] leading-[24px]">
                    Hello {name},
                    </Text>
                    <Text className="text-black text-[14px] leading-[24px]">
                    <strong>{subject}</strong> (
                    <Link
                        href={`mailto:${email}`}
                        className="text-blue-600 no-underline"
                    >
                        <Button title="Répondre"></Button>
                    </Link>
                    )
                    </Text>
                    <Section>
                        {message}
                    </Section>
                    <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                    <Text className="text-[#666666] text-[12px] leading-[24px]">
                    </Text>
                </Container>
                </Body>
            </Tailwind>
            </Html>
    );
}