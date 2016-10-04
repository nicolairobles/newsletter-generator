INSERT INTO newsletters (name, month, day, year, num_of_articles, litmus_code) VALUES
	('10-05-2016','October', 5, 2016, 8, $$'<style data-ignore-inlining>@media print{ #_t { background-image: url('https://avkhf65c.emltrk.com/avkhf65c?p&d=%%emailaddr%%');}} div.OutlookMessageHeader {background-image:url('https://avkhf65c.emltrk.com/avkhf65c?f&d=%%emailaddr%%')} table.moz-email-headers-table {background-image:url('https://avkhf65c.emltrk.com/avkhf65c?f&d=%%emailaddr%%')} blockquote #_t {background-image:url('https://avkhf65c.emltrk.com/avkhf65c?f&d=%%emailaddr%%')} #MailContainerBody #_t {background-image:url('https://avkhf65c.emltrk.com/avkhf65c?f&d=%%emailaddr%%')}</style><div id="_t"></div> <img src="https://avkhf65c.emltrk.com/avkhf65c?d=%%emailaddr%%" width="1" height="1" border="0" />'$$),
	('01-29-2017','January', 29, 2017, 12, $$'<style data-ignore-inlining>@media print{ #_t { background-image: url('https://avkhf65c.emltrk.com/avkhf65c?p&d=%%emailaddr%%');}} div.OutlookMessageHeader {background-image:url('https://avkhf65c.emltrk.com/avkhf65c?f&d=%%emailaddr%%')} table.moz-email-headers-table {background-image:url('https://avkhf65c.emltrk.com/avkhf65c?f&d=%%emailaddr%%')} blockquote #_t {background-image:url('https://avkhf65c.emltrk.com/avkhf65c?f&d=%%emailaddr%%')} #MailContainerBody #_t {background-image:url('https://avkhf65c.emltrk.com/avkhf65c?f&d=%%emailaddr%%')}</style><div id="_t"></div> <img src="https://avkhf65c.emltrk.com/avkhf65c?d=%%emailaddr%%" width="1" height="1" border="0" />'$$);


INSERT INTO colors (color_name, hex_code) VALUES
	('orange', '#ff8300'),
	('purple', '#b21dac'),
	('green', '#85c63f'),
	('blue', '#009dd9'),
	('red', '#d60037');


INSERT INTO article_types (article_type_name) VALUES
	('lead'),
	('non-lead'),
	('event');


INSERT INTO articles (article_type, title, description, article_url, icon_url, category_tag, newsletter_id, color_id, cta, event_date, event_time) VALUES
	(1,'Choice Cuts: Consumers Have Nearly Unlimited Content Options, But How Many Do They Really Use?','For consumers, having content options is no longer a luxury, but an imperative. And so, too, are the multitude of devices that they use to engage with that content.', 'http://www.nielsen.com/us/en/insights/news/2016/choice-cuts-consumers-have-nearly-unlimited-content-options-but-how-many-do-they-use.html', '/content/dam/nielsenglobal/global/images/icons/65x65/orange/processImprovement_Orange_65x65.png', 'BLOG', 1, 1, 'Read More' ,'n/a','n/a'),
	(2, 'Uncommon Sense: The Modern Innovation Dilemma—First Mover or Best Mover?','Brands armed with new products have always rushed to be first to market, but being “first mover” at the expense of being “best mover” can often lead brands to competitive disadvantage.', 'http://www.nielsen.com/us/en/insights/news/2016/uncommon-sense-the-modern-innovation-dilemma-first-mover-or-best-mover.html', '/content/dam/nielsenglobal/global/images/icons/65x65/purple/marketingPerformanceMarketingEffectivness_Purple_65x65.png', 'CONSUMER', 1, 2, 'Watch now','n/a', 'n/a'),
	(2, 'The Big Retail Picture in Asia Pacific',$$'Asia Pacific continues to shine on most companies' radar when looking for growth opportunities thanks to its large populations, increasing spending capacity and optimistic consumer sentiment.'$$, $$'http://www.nielsen.com/apac/en/insights/news/2016/the-big-retail-picture-in-asia-pacific-now-with-14-markets.html'$$, $$/content/dam/nielsenglobal/global/images/icons/65x65/purple/marketingPerformanceMarketingEffectivness_Purple_65x65.png$$, 'CONSUMER', 1, 5, 'Read more','n/a', 'n/a'),
	(3, $$'RECENT WEBINAR: Putting a Premium on Innovation - Best Practices for Launching Pricier Products'$$, $$'Addressing an unmet consumer need is an absolute necessity of innovation, but it's also just the beginning. For a premium initiative to succeed, the final product has to delight the consumer and create a rich story that elevates the product to a more holistic "experience."'$$, $$'http://www.nielsen.com/us/en/insights/news/2016/uncommon-sense-the-modern-innovation-dilemma-first-mover-or-best-mover.html'$$, $$'/content/dam/nielsenglobal/global/images/icons/65x65/purple/marketingPerformanceMarketingEffectivness_Purple_65x65.png'$$, '', 1, 2, 'Watch now', 'Tuesday, September 13, 2016', '3:00 PM EDT');

