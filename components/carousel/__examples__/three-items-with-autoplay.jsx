import React from 'react';

import Carousel from '~/components/carousel';
import IconSettings from '~/components/icon-settings';

import log from '~/utilities/log';

const items = [
	{
		buttonLabel: 'Get Started',
		id: 1,
		heading: 'Visit App Exchange',
		description: 'Extend Salesforce with the #1 business marketplace.',
		imageAssistiveText: 'Appy',
		src: '/assets/images/carousel/carousel-01.jpg',
		href: 'https://www.salesforce.com',
	},
	{
		buttonLabel: 'Get Started',
		id: 2,
		heading: 'Click to Customize',
		description:
			'Use the Object Manager to add fields, build layouts, and more.',
		imageAssistiveText: 'Apps',
		src: '/assets/images/carousel/carousel-02.jpg',
		href: 'https://www.salesforce.com',
	},
	{
		buttonLabel: 'Get Started',
		id: 3,
		heading: 'Download SalesforceA',
		description: "Get the mobile app that's just for Salesforce admins.",
		imageAssistiveText: 'SalesforceA',
		src: '/assets/images/carousel/carousel-03.jpg',
		href: 'https://www.salesforce.com',
	},
	{
		buttonLabel: 'Get Started',
		id: 4,
		heading: 'Carousel Item 4',
		description: 'Description for carousel item #4',
		imageAssistiveText: 'Apps',
		src: '/assets/images/carousel/carousel-02.jpg',
		href: 'https://www.salesforce.com',
	},
	{
		buttonLabel: 'Learn More',
		id: 5,
		heading: 'Carousel Item 5',
		description: 'Description for carousel item #5',
		imageAssistiveText: 'Appy',
		src: '/assets/images/carousel/carousel-01.jpg',
		href: 'https://www.salesforce.com',
	},
	{
		buttonLabel: 'Learn More',
		id: 6,
		heading: 'Carousel Item 6',
		description: 'Description for carousel item #6',
		imageAssistiveText: 'SalesforceA',
		src: '/assets/images/carousel/carousel-03.jpg',
		href: 'https://www.salesforce.com',
	},
	{
		buttonLabel: 'Learn More',
		id: 7,
		heading: 'Carousel Item 7',
		description: 'Description for carousel item #7',
		imageAssistiveText: 'Apps',
		src: '/assets/images/carousel/carousel-02.jpg',
		href: 'https://www.salesforce.com',
	},
];

class Example extends React.Component {
	static displayName = 'ThreeItemsWithAutoplayExample';

	render() {
		return (
			<IconSettings iconPath="/assets/icons">
				<div
					style={{
						maxWidth: '1280px',
					}}
				>
					<Carousel
						hasAutoplay
						id="carousel-three-items-with-auto-play-example"
						items={items}
						itemsPerPanel={3}
						onItemClick={(event, data) => {
							event.preventDefault();
							log({
								action: this.props.action,
								event,
								eventName: 'Item Clicked',
								data,
							});
						}}
					/>
				</div>
			</IconSettings>
		);
	}
}

export default Example;
