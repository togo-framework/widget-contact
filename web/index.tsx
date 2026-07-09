import { registerWidget, type WidgetContext } from "@togo-framework/widget";

export function Contact({ settings }: WidgetContext) {
  const email = (settings.email as string) ?? "hello@example.com";
  const phone = (settings.phone as string) ?? "";
  const address = (settings.address as string) ?? "";
  return (
    <ul className="wx-contact" style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 6 }}>
      <li>Email: <a href={`mailto:${email}`}>{email}</a></li>
      {phone ? <li>Phone: <a href={`tel:${phone}`}>{phone}</a></li> : null}
      {address ? <li>Address: {address}</li> : null}
    </ul>
  );
}
registerWidget({ key: "contact", title: "Contact", defaultZone: "sidebar", defaultSettings: { email: "hello@example.com" }, Comp: Contact });
