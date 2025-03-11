import React from "react";
import "./CropCorousel.css";
import { Carousel } from "react-bootstrap";


const CropCarousel = () => {
  return (
    <><div className="container1 my-5">

          <h1 className="text-primary">Crop knowledge sharing</h1>
          <p>
              Crop knowledge sharing helps farmers maximize yields with expert guidance.
              Our agronomists provide personalized support, best practices, and precision irrigation
              techniques. With over 50 years of experience, we offer up-to-date insights for improved
              crop quality. Learn sustainable methods to enhance productivity and
              efficiency. Stay informed with the latest agricultural innovations for long-term success.
          </p>
          <Carousel>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src="https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=1500,/bynder/EEFACD4C-18CA-4955-811EEAC63FA0F00B-cotton-field-of-india.jpg"
                      alt="Cotton" />
                  <Carousel.Caption>
                      <h3>Cotton</h3>
                      <p>Maintaining moisture levels in the cotton field proves to be challenging.
                          It could foster pest attacks and diseases. Hence, drip irrigation that maintains moisture levels is the best solution here. Besides, cotton farming in India, which is dependent on flood irrigation, could face challenges with flowering, ball development, and ball opening.
                          These factors require balanced nutrition, a 95% germination rate, etc. and this is why cotton
                          cultivation requires precision irrigation.</p>
                  </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src="https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=750,/contentassets/1d4628e2d99246328326aef304406817/banana-fruit-.jpg?v=49311b"
                      alt="Banana" />
                  <Carousel.Caption>
                      <h3>Banana</h3>
                      <p>Banana requires a lot of water to grow, and hence dry spells are a major risk impacting banana productivity.
                          The other challenge is that of banana cultivation being dominated by conventional growing techniques that
                          include applying fertilizers in the forms of pellets. Although cost-effective, it is ineffective. This is
                          because nutrients may leach or evaporate after their application. Bananas are best grown in more acidic
                          soil with a pH from 6 to 7.5. Low pH levels of soil increase the risk of the disease Panama.</p>
                  </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src="https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=1500,/globalassets/demo/potato/potatoes_challenge.jpg?v=48d5e8"
                      alt="Potatoes" />
                  <Carousel.Caption>
                      <h3>Potatoes</h3>
                      <p>To grow potatoes, you need to stay in control of a lot of diverse factors such as weather,
                          deteriorating soil quality, water scarcity, etc. And,
                          if these factors weren’t enough, ever-increasing operational, fertilizer and labour costs,
                          add to challenges of potato growers in India.</p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
      </div>
      <div className="container2 my-5">
              <div className="row align-items-center">
                  
                  <div className="col-md-6">
                      <h2 className="text-primary">Why Precision Irrigation in Banana Cultivation?</h2>
                      <ul className="list-unstyled">
                          <li>
                              <strong>• Reduce Climate Related Risks</strong>
                              <p>
                              Precision irrigation provides a stable and controlled water supply, reducing the impact of 
                              unpredictable weather conditions such as droughts, excessive rainfall, and temperature fluctuations on banana crops.
                              </p>
                          </li>
                          <li>
                              <strong>• Saves Resources and Reduces Costs</strong>
                              <p>
                              Precision irrigation optimizes water, fertilizers, and energy use by supplying only what is needed, 
                              preventing wastage. This reduces operational costs while enhancing soil health and crop productivity. 
                              Lower resource consumption also minimizes environmental impact and improves sustainability.
                              </p>
                          </li>
                          <li>
                              <strong>• Optimizes Water and Nutrient Use</strong>
                              <p>
                              
                              Precision irrigation ensures that water and nutrients are delivered directly to the plant roots
                               in the right quantity, enhancing absorption and minimizing runoff. This targeted approach reduces 
                               wastage, prevents soil erosion, and maintains soil fertility.
                              </p>
                          </li>
                      </ul>
                  </div>

                  
                  <div className="col-md-6 text-center">
                      <img
                          src="https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=1500,/bynder/CAF80337-7828-41DE-9B8FC185140BE4C6-hand-with-dripping---drop-by-drop.jpg"
                          alt="Precision Irrigation"
                          className="img-fluid rounded" />
                  </div>
              </div>
          </div></>
  );
};
export default CropCarousel;
