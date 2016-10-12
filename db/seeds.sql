INSERT INTO newsletters (name, month, day, year, litmus_code) VALUES
	('10-05-2016','October', 5, 2016, $$test_code$$),
	('10-10-2016','October', 10, 2016, $$qao293ab$$);


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


INSERT INTO articles (article_type, title, description, article_url, icon_url, category_tag, newsletter_id, color_id, cta, event_date, event_time, position) VALUES
	(1,'Holiday 2016: The Most Anticipated Video Games',$$The holiday season delivers joy in a wide variety of ways…family gatherings, fellowship, delectable meals, the spirit of giving…and lots of new video games. So what's topping gamers' wish lists this year?$$, $$http://www.nielsen.com/us/en/insights/news/2016/holiday-2016-the-most-anticipated-video-games.html$$, $$/content/dam/corporate/us/en/images/newswire-newsletter/gift_blue_130x130.png$$, '', 2, 4, 'Read more' ,'n/a','n/a', 1),
	(2, $$Investing in Football Is at the Heart of China's Sports Master Plan$$,$$From promoting fitness to encouraging foreign investment, China set forth in 2014 to create an $813 billion sports industry by 2025.$$, $$http://www.nielsen.com/cn/en/insights/news/2016/investing-in-football-is-at-the-heart-of-chinas-sports-master-plan.html$$, $$/content/dam/nielsenglobal/global/images/icons/65x65/orange/soccer-orange-65x65.png$$, $$MEDIA AND ENTERTAINMENT$$, 2, 1, 'Read more','n/a', 'n/a', 2),
	(2, $$Radio's Impact Among Hispanic Consumers Is Evident$$, $$Radio reaches 97% of all Hispanics every week, the highest penetration statistic that we measure across demographics, ethnicities and platforms.$$, $$http://www.nielsen.com/us/en/insights/news/2016/radios-impact-among-hispanic-consumers-is-evident.html$$, $$/content/dam/nielsenglobal/global/images/icons/65x65/purple/radio_Purple.png$$, $$MEDIA AND ENTERTAINMENT$$, 2, 2, 'Read more','n/a', 'n/a', 3),
	(2, $$Food Fight: Winning the Battle for Share of Stomach$$, $$Dutch consumers aren't just eating at home. They're also dining out—many quite frequently—and the establishments serving them compete with food retailers and manufacturers in the battle for consumers' wallets (and stomachs).$$, $$http://www.nielsen.com/be/en/insights/news/2016/food-fight-winning-the-battle-for-share-of-stomachs.html$$, $$/content/dam/nielsenglobal/global/images/icons/65x65/red/restaurant-red-65x65.png$$, $$CONSUMER$$, 2, 5, 'Read more', 'n/a', 'n/a', 4),
	(2, $$Interest in Advanced Auto Tech Is on the Move$$, $$When it comes to consumer purchase behavior, there's no greater motivator than price—especially for large investments like automobiles. But recent research indicates that price is losing steam as an influencer.$$, $$http://www.nielsen.com/us/en/insights/news/2016/interest-in-advanced-auto-tech-is-on-the-move.html$$, $$/content/dam/nielsenglobal/global/images/icons/65x65/green/auto_green_65x65.png$$, $$INNOVATION$$, 2, 3, 'Read more', 'n/a', 'n/a', 5),
	(2, $$Nielsen TV: Developing Programming that Speaks to U.S. Hispanic Audiences$$, $$Telemundo has found great success in developing programming that is authentic, representative of its audience and available for multi-platform consumption$$, $$http://www.nielsen.com/us/en/insights/news/2016/nielsen-tv-developing-programming-that-speaks-to-us-hispanic-audiences.html$$, $$/content/dam/nielsenglobal/global/images/icons/65x65/orange/programmingEffectiveness__65x65.png$$, $$CONSUMER$$, 2, 1, 'Watch now', 'n/a', 'n/a', 6),
	(2, $$37 Million Viewers Tune in to Kaine and Pence Vice Presidential Debate$$, $$An estimated 37 million people tuned in to watch the vice presidential debate of the 2016 presidential election on Tuesday, Oct. 4, 2016.$$, $$http://www.nielsen.com/us/en/insights/news/2016/37-million-viewers-tune-in-to-kaine-pence-vice-presidential-debate.html$$, $$/content/dam/nielsenglobal/global/images/icons/65x65/purple/consulting_Purple_65x65.png$$, $$MEDIA AND ENTERTAINMENT$$ , 2, 2, 'Read more', 'n/a', 'n/a', 7),
	(2, $$Keeping the Benelux Shopper Coming Back$$, $$Over the past 10 years, price has driven three-quarters of the growth in the Benelux food retail sector. But while growth is slowing, you don't need to start a promotional war to keep your shoppers.$$, $$http://www.nielsen.com/be/en/insights/news/2016/keeping-the-benelux-shopper-coming-back.html$$, $$/content/dam/nielsenglobal/global/images/icons/65x65/red/prici_65x65.png$$, $$CONSUMER$$ , 2, 5, 'Read more', 'n/a', 'n/a', 8),
	(3, $$Upcoming Webinar: Swipe to Buy$$, $$Online sales of consumer goods are growing rapidly, but the promise of new digital technologies and platforms represents much more than just a new growth channel.$$, $$https://event.on24.com/eventRegistration/EventLobbyServlet?target=reg20.jsp&partnerref=nielsendotcom&eventid=1263592&sessionid=1&key=FC030683D3DCA2C2BCC6FC4DF8599836&regTag=&sourcepage=register$$, 'n/a', '' , 2, 4, 'Join us', $$Tuesday, Oct. 25, 2016$$, $$11:00 am CDT$$, 9);




