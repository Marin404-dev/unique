import unique_logo from "../assets/unique_logo.png";

function Footer() {
  const quickLinks = [
    "Shop",
    "Collections",
    "Best Sellers",
    "About",
    "Contact",
  ];
  const customerCare = [
    "FAq",
    "Shipping & Returns",
    "Size Guide",
    "Order Tracking",
    "Support",
  ];
  const followUs = ["Instagram", "X", "Tiktok", "Pinterest"];
  const legal = ["Terms & Conditions", "Privacy Policy", "Cookie Policy"];

  return (
    <footer className="h-[540px] mt-16 flex flex-col justify-between ">
      <hr className="border-[#dadada] border" />

      <div className="flex flex-row justify-between m-8 ">
        {/* Logo */}
        <div className="flex items-end">
          <img src={unique_logo} alt="Unique Logo" />
        </div>

        <div className="flex flex-row gap-16 self-end justify-between">
          {/* Quick Links */}
          <FooterSection title="Quick Links" items={quickLinks} />

          {/* Customer Care */}
          <FooterSection title="Customer Care" items={customerCare} />

          {/* Follow Us */}
          <FooterSection title="Follow Us" items={followUs} />

          {/* Legal */}
          <FooterSection title="Legal" items={legal} />
        </div>

        <div className="max-w-sm item-start flex justify-between flex-col">
          <h2 className="font-semibold ">Newsletter:</h2>
          <input
            type="text"
            className="border border-[#dadada] rounded-full h-8 pl-6 w-full placeholder:text-sm"
            placeholder="Enter your email address here:"
          />
          <p className="font-semibold text-sm">
            Stay unique. Join our community for updates, drops, and exclusive
            offers.
          </p>

          <small className="font-semibold text-sm">
            © 2025 unique. All rights reserved.
          </small>
        </div>
      </div>

      {/* Colored bars */}
      <div className="flex flex-row justify-evenly items-end">
        <div className="w-[320px] h-12 bg-[#DA7AFF]"></div>
        <div className="w-[320px] h-12 bg-[#FFE550]"></div>
        <div className="w-[320px] h-12 bg-[#13CC4E]"></div>
        <div className="w-[320px] h-12 bg-[#C30022]"></div>
        <div className="w-[320px] h-12 bg-[#0474BA]"></div>
        <div className="w-[320px] h-12 bg-[#FFA630]"></div>
      </div>
    </footer>
  );
}

type FooterSectionProps = {
  title: string;
  items: string[];
};

function FooterSection({ title, items }: FooterSectionProps) {
  return (
    <nav>
      <h2 className="font-semibold mb-8">{title}</h2>
      <div className="flex flex-col space-y-1">
        {items.map((item: string, index: number) => (
          <a
            key={index}
            href=""
            className="text-[#dadada] underline text-sm/tight"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Footer;
