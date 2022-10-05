# Web-Perfomance-Core-Web-Vitals

Google's Core Web Vitals help users measure user experience by measuring speed, responsiveness, and visual stability. This article will cover the following topics:

- Performance metrics
- Poor metrics scores
- Metrics improvement tips
- Other performance metrics
- Key Takeaways
- Reference

### These are the three performance metrics:

- Larger contentful paint(LCP) - measures loading performance.
- First Input Delay (FID)- measures interactivity.
- Cumulative Layout Shift (CLS)- measures layout stability.

Figure one shows a high-level breakdown of Core Web Vitals:

![Screenshot 2022-07-03 at 23 07 22](https://user-images.githubusercontent.com/64105005/180094713-4cf27fa1-8cde-4671-8745-8efd91c4bb77.png)
Figure one: Core web vitals
 
### What is the meaning of each metric? Which causes and solutions are most common?

**Large contentful paint**- measures when the main content of a page has loaded. Is the content on the page loading quickly?
As soon as the page loads, the browser triggers the measurement metrics to identify the sizeable visible element.

What are the common causes of poor LCP scores? 
- Network issues such as slow server response and slow resource loading time.
- Big static files

LCP scores possible solutions :
- Caching -The browser caches data to save it for later use.
- Compressing the file size and specifying the header content.


**First Delay Input** - measures the user's first impressions of the site's responsiveness and interactivity.  For example, how quickly does the page respond when users scroll, click, and tap it? 
It is common for testing tools to estimate FDI using Total Blocking Time,TBT.

What are the common causes of poor FDI scores? 
- Long Javascript execution time.
- Large Javascript Bundlers.

FDI scores possible solution :
- Lazy loading.
- Bundle analysis.

**Cumulative Layout Shift** - measures the stability of the layout and ensures a smooth and natural user experience. Does the content move unexpectedly? 
You may encounter this situation when you're reading content on a website and suddenly an advertisement appears.

What are the common causes of poor CLS scores? 
- Ad promotions and images without dimensions bounce around the content.
- Web Fonts that cause a Flash of Invisible Text,FOIT or Flash of Unstyled Text,FOUT.

CLS possible solutions:
- Images and videos must always have height and width specified.
- Reverting to commonly used fonts.
- Consider adding a container for ads and promo content to reserve space for dynamic ads and promotions.

##### Other performance metrics include:
- Mobile Friendly
- Safe browsing
- HTTP
- No intrusive interstitials

### Takeaway
A website audit can provide information about the current state of a website, evaluate it, and help it become more effective.

### Reference
- [Web Vitals:web de](https://web.dev/vitals/)
- [Optimize for web vitals](https://web.dev/vitals/)
