import { ReactComponent as VisaCard } from "assets/icons/visacard.svg";
import { ReactComponent as MasterCard } from "assets/icons/mastercard.svg";
import { ReactComponent as Amex } from "assets/icons/amex.svg";
import { ReactComponent as PayPal } from "assets/icons/paypal.svg";
import { ReactComponent as DinnersClub } from "assets/icons/dinnersclub.svg";
import { ReactComponent as Discover } from "assets/icons/discover.svg";
import { ReactComponent as FaceBook } from "assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "assets/icons/instagram.svg";
import { ReactComponent as Github } from "assets/icons/github.svg";

const Footer = () => {
	return (
		<footer className="p-10 footer bg-base-200 text-base-content footer-center">
			<div className="grid grid-flow-col gap-4">
				<a
					href="https://zero-base.co.kr/"
					target="_blank"
					className="link link-hover"
					rel="noreferrer"
				>
					제로베이스
				</a>
			</div>
			<ul className="flex">
				<li>
					<VisaCard />
				</li>
				<li>
					<MasterCard />
				</li>
				<li>
					<Amex />
				</li>
				<li>
					<PayPal />
				</li>
				<li>
					<DinnersClub />
				</li>
				<li>
					<Discover />
				</li>
			</ul>
			<div>
				<div className="grid grid-flow-col gap-4">
					<a
						href="https://www.facebook.com/0base"
						target="_blank"
						data-tip="facebook"
						className="tooltip"
						rel="noreferrer"
					>
						<FaceBook />
					</a>
					<a
						href="https://www.instagram.com/zerobase.official"
						target="_blank"
						data-tip="instagram"
						className="tooltip"
						rel="noreferrer"
					>
						<Instagram />
					</a>
					<a
						href="https://github.com/BTSBRINGMEHERE"
						target="_blank"
						data-tip="github"
						className="tooltip ml-1"
						rel="noreferrer"
					>
						<Github />
					</a>
				</div>
			</div>
			<div>
				<p>Copyright © 2022 Zero Base</p>
			</div>
		</footer>
	);
};

export default Footer;
