import { useState } from "react";
import SectionHeading from "./SectionHeading";
import SocialIcons from "./SocialIcons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:architadas@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a question or want to work together? Drop me a message!"
        />
        <div className="grid md:grid-cols-2 gap-10">
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-5 shadow-md"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="rounded-xl min-h-[120px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-full hover:scale-105 transition-transform"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>

          <div className="flex flex-col justify-center items-center text-center space-y-6">
            <p className="text-muted-foreground max-w-sm">
              Feel free to reach out through the form or connect with me on social media. I'm always open to
              discussing new projects and opportunities.
            </p>
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
