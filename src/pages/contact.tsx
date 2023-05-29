import FAQItem from '@/components/FAQItem/FAQItem.component';
import ContactForm from '@/components/contactForm/contactForm.component';
import Layout from '@/components/layout/layout.component';
import styles from '@/styles/Contact.module.css';

const questionsAnswers = [
  {
    question:
      ' What services do you offer as a freelance full-stack web developer?',
    answer: `A: As a freelance full-stack web developer, I can help you bring
    your business online by creating a complete website for you. This
    includes designing how your website looks, making it work
    properly, and making sure it's accessible to everyone.`,
  },
  {
    question: ` What programming languages and frameworks are you proficient
    in?`,
    answer: ` A: I am skilled in using various technologies like HTML, CSS,
    JavaScript, and React. These tools help me create beautiful and
    functional websites that can attract customers to your business.
    I'm also familiar with other frameworks and databases that make
    your website work smoothly.`,
  },
  {
    question: ` Can you show me examples of websites or web applications you
    have developed?`,
    answer: `A: Of course! I have worked on many websites for different
    businesses, and I can show you some examples of my previous
    projects. You'll get an idea of how your website could look and
    function. Just let me know, and I'll be happy to share the links
    with you.`,
  },
  {
    question: ` What is your development process like?`,
    answer: ` A: When working on your website, I will start by understanding
    what you need and how you want your website to look. Then, I'll
    create a plan and design the layout for your approval. After that,
    I'll build the website and test everything to make sure it works
    well. Once it's ready, I'll launch it for you and provide support
    along the way.`,
  },
  {
    question: ` How do you make sure my website looks good on mobile phones
    and tablets?`,
    answer: `A: It's important to have a website that works well on different
    devices. I will ensure that your website is responsive, meaning it
    will automatically adjust and look great on mobile phones,
    tablets, and desktop computers. This way, your customers can
    easily browse your website no matter what device they are using.`,
  },
  {
    question: ` How will you keep my website secure?`,
    answer: ` A: Website security is a top priority for me. I will follow best
    practices to protect your website from any potential threats. This
    includes using secure coding techniques, ensuring that your
    customers' information is safe, and implementing security measures
    to prevent unauthorized access to your website.`,
  },
  {
    question: ` What if I need help with maintaining and updating my website
    in the future?`,
    answer: `A: I understand that websites require regular updates and
    maintenance to keep them running smoothly. I offer ongoing website
    maintenance services, which include making sure your website is
    up-to-date, fixing any issues that may arise, and providing
    support whenever you need it. We can discuss a maintenance plan
    that suits your specific needs.`,
  },
  {
    question: ` How much does it cost to have a freelance web developer
      create my website?`,
    answer: `A: The cost of creating a website depends on the complexity and
      features you want for your business. After discussing your
      requirements, I will provide you with a detailed proposal that
      includes the estimated cost. My rates are competitive and reflect
      the value I bring through my expertise and experience. Let's talk
      about your project specifics, and I'll provide you with an
      estimate.`,
  },
];

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contactContainer}>
        <h1 className={styles.heading}>Contact</h1>
        <div className={styles.businessInfoContainer}>
          <h2 className={styles.subHeading}>Business Information</h2>
          <ul>
            <li className={`${styles.listItem} ${styles.infoItem}`}>
              <strong>Working Days:</strong>
              <ul>
                <li className={`${styles.listItem} ${styles.infoItem}`}>
                  Monday-Friday: Open to Work
                </li>
                <li className={`${styles.listItem} ${styles.infoItem}`}>
                  Saturday & Sunday: Closed
                </li>
              </ul>
            </li>
            <li className={`${styles.listItem} ${styles.infoItem}`}>
              <strong>Holidays Off:</strong>
              <ul>
                <li className={`${styles.listItem} ${styles.infoItem}`}>
                  New Year's Day
                </li>
                <li className={`${styles.listItem} ${styles.infoItem}`}>
                  Memorial Day
                </li>
                <li className={`${styles.listItem} ${styles.infoItem}`}>
                  Independence Day
                </li>
                <li className={`${styles.listItem} ${styles.infoItem}`}>
                  Labor Day
                </li>
                <li className={`${styles.listItem} ${styles.infoItem}`}>
                  Thanksgiving Day
                </li>
                <li className={`${styles.listItem} ${styles.infoItem}`}>
                  Christmas Day
                </li>
              </ul>
            </li>
            <li
              className={`${styles.listItem} ${styles.infoItem} ${styles.notice}`}
            >
              <strong>Other time off will be announced in advance.</strong>
            </li>
          </ul>
        </div>
        <div className={styles.faqContainer}>
          <h2 className={styles.subHeading}>Frequently Asked Questions</h2>
          <ul className={styles.list}>
            {questionsAnswers.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;
