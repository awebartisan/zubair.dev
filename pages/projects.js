import Layout from "../components/Layout";

export default function Projects() {
  return (
    <Layout title='Projects'>
      <div className='py-6'>
        <div className='prose'>
          <h2>Company Projects</h2>
          <ul>
            <li>
              <a target='_blank' href='https://rokit.gdprhelper.io'>
                Rokit
              </a>
              <p>
                Rokit is a URL Shortener web application built with{" "}
                <strong>Laravel</strong> and <strong>Livewire</strong>,{" "}
                <em>TALL</em> stack. It provides Analytics about the shortened
                URL, Retargeting Pixels, UTM Tracking and much more.
              </p>
            </li>
            <li>
              <a>Qartext</a>
              <p>
                Shopify Application built with{" "}
                <strong>Laravel, Inertia.js, React, Polaris</strong>. It helped
                merchants send scheduled SMS to customers who abandoned their
                checkout with discount offer. <strong>Vonage</strong> SMS API
                was used to send SMS. Building <em>balance credits</em> for
                merchants was quite challenging for me.
              </p>
            </li>
            <li>
              <a>Shopfunnel</a> (Closed because of Legal Issue)
              <p>
                <a>shopfunnel.com</a> was a platform meant to help{" "}
                <a target='_blank' href='https://www.clickfunnels.com'>
                  clickfunnels
                </a>{" "}
                users manage their orders and fulfillments. It was built with{" "}
                <strong>Laravel, Inertia.js, Vue.js, Bootstrap</strong>. A
                multi-tenant application with separate subdomain and database
                for each customer. Had my first experience with load-balancing.
                Company had almost 20 paid customers on the launch day 🎉
              </p>
            </li>
          </ul>
          <h2>Freelance Projects</h2>
          <ul>
            <li>
              <a target='_blank' href='https://apps.shopify.com/sale-effects'>
                Wow Sale Effects
              </a>{" "}
              <p>
                Wow Sale Effects is about adding animated icons to Shopify
                store. Maximising the ability to grab attention for the current
                message: Whether it is a sale, new products, holiday event or
                any other event merchants want to promote.
              </p>
            </li>
            <li>
              <a
                target='_blank'
                href='https://apps.shopify.com/fulfillment-delay-alerts'>
                Fulfillment Doctor
              </a>{" "}
              <p>
                Help merchants with email alerts on their preferred day and time
                to know about delayed fulfilment in Shopify. Even let the end
                customers know that there delivery is late for some reason
                specified by merchant.
              </p>
            </li>
            <li>
              <a target='_blank' href='https://apps.shopify.com/pixel-hook'>
                Pixel Hook
              </a>{" "}
              <p>
                Pixel Hook is a Shopify app which enhances Facebook Pixel
                Analytics by sending custom events and additional data with
                pixel.
              </p>
            </li>
            <li>
              <a>GDPR Helper</a>
              <p>
                GDPR Helper is a Shopify App which lets Merchants to quickly
                make their store GDPR compliant. It creates necessary pages of
                legal information with options for customizations.
              </p>
            </li>
          </ul>
          <h2>Personal Projects</h2>
          <ul>
            <li>
              <a target='_blank' href='https://unfollow.pro'>
                Unfollow
              </a>{" "}
              (WIP)
              <p>
                Bulk unfollowing on Twitter, Made Easy!
                <br />
                Building this project with the <em>TALL</em> stack.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
