import { Heading, Page, Button, PlusMinor } from "@shopify/polaris";

export default function Index() {
  return (
<Page
  fullWidth
  title="Product selector"
  primaryAction={{content: 'Select Product', icon: PlusMinor}}
>
  <p>Wide page content</p>
</Page>
  );
}
