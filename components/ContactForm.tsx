import { site } from '@/lib/site';

export default function ContactForm() {
  return (
    <form className="contact-form" action={site.formAction} method="POST">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">نام و نام خانوادگی</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">ایمیل</label>
          <input type="email" id="email" name="email" required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="subject">موضوع</label>
        <input type="text" id="subject" name="subject" required />
      </div>

      <div className="form-group">
        <label htmlFor="message">پیام شما</label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      <button type="submit" className="btn btn-primary">
        ارسال پیام
        <span>←</span>
      </button>
    </form>
  );
}
