import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  intent: string;
  message: string;
}

export function ContactEmail({ name, email, phone, intent, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        {intent}: {name}
      </Preview>
      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>New Contact Form Submission</Heading>
          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>From</Text>
            <Text style={value}>{name}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Reply-to</Text>
            <Link href={`mailto:${email}`} style={link}>
              {email}
            </Link>
          </Section>

          {phone && (
            <Section style={section}>
              <Text style={label}>Phone</Text>
              <Link href={`tel:${phone}`} style={link}>
                {phone}
              </Link>
            </Section>
          )}

          <Section style={section}>
            <Text style={label}>About</Text>
            <Text style={value}>{intent}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>Message</Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>Sent via the contact form at shivamsabbarwal.dev</Text>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  padding: "40px",
  borderRadius: "8px",
  maxWidth: "560px",
  border: "1px solid #e6ebf1",
};

const heading = {
  color: "#1a1a1a",
  fontSize: "22px",
  fontWeight: "700",
  margin: "0 0 20px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const section = {
  margin: "0 0 16px",
};

const label = {
  color: "#6b7280",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  margin: "0 0 4px",
};

const value = {
  color: "#1a1a1a",
  fontSize: "15px",
  margin: "0",
};

const link = {
  color: "#3b82f6",
  fontSize: "15px",
};

const messageStyle = {
  color: "#374151",
  fontSize: "15px",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap" as const,
  margin: "0",
};

const footer = {
  color: "#9ca3af",
  fontSize: "12px",
  margin: "0",
};
