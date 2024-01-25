import PageHeading from "../../components/PageHeading/PageHeading";
import PaddingWrapper from "../../containers/PaddingWrapper/PaddingWrapper";

const ReturnsPage = () => {
  return (
    <PaddingWrapper>
      <main>
        <PageHeading>Returns</PageHeading>
        <p>
          Welcome to Sound, where your satisfaction is our top priority. We
          understand that sometimes, despite your best intentions, a product may
          not meet your expectations. That's why we've made our returns and
          exchanges process simple and straightforward.
        </p>

        <h2>Return Policy</h2>
        <h3>30-Day Money Back Guarantee</h3>
        <p>
          We offer a hassle-free 30-day return policy. If you are not completely
          satisfied with your purchase, you may return it within 30 days for a
          full refund or exchange. To be eligible for a return, your item must
          be unused, in the same condition that you received it, and in the
          original packaging.
        </p>
        <h3>How to Initiate a Return</h3>
        <ol>
          <li>
            Log in to your Sound account and go to the "Order History" section.
          </li>
          <li>Select the order containing the item you want to return.</li>
          <li>
            Click on the "Return Items" button and follow the instructions to
            complete the return request.
          </li>
        </ol>
        <h3>Return Shipping</h3>
        <p>
          Customers are responsible for return shipping costs unless the return
          is a result of our error (e.g., you received the wrong item). We
          recommend using a trackable shipping service to ensure your return is
          received.
        </p>

        <h2>Exchange Policy</h2>
        <p>
          If you would like to exchange your item for a different color, size,
          or product, please initiate a return for the item you wish to exchange
          and place a new order for the desired item. This ensures a quicker and
          more efficient process.
        </p>

        <h2>Refund Process</h2>
        <p>
          Once your return is received and inspected, we will send you an email
          to notify you that we have received your returned item. We will also
          notify you of the approval or rejection of your refund. If approved,
          your refund will be processed, and a credit will automatically be
          applied to your original method of payment within a specified number
          of days.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our returns and exchanges process,
          please don't hesitate to contact our customer service team at
          support@sound.com. We are here to assist you.
        </p>
        <p>
          Thank you for choosing Sound. We appreciate your business and strive
          to make your shopping experience enjoyable and worry-free.
        </p>
      </main>
    </PaddingWrapper>
  );
};

export default ReturnsPage;
