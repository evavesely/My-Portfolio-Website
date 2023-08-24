import Navbar from 'components/navbar'
import Image from "next/image"
import vision2 from '../public/vision2.png'
import vision3 from '../public/vision3.png'
import vision4 from '../public/vision4.png'
import vision5 from '../public/vision5.png'
import vision6 from '../public/vision6.png'
import {BsStars} from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <main className="bg-pink-50 px-10 md:px-10 lg:px-20 dark:bg-violet-900">
        <section className=" bg-pink-50 min-h-screen dark:bg-violet-900">
          <Navbar />
          
          <div className="p-5 flex gap-16 justify-center">
            <BsStars className="text-3xl text-pink-900 -mr-12 dark:text-violet-50"/>
            <h3 className=" text-2xl sm:text-3xl text-pink-900 font-burtons text-center md:text-4xl dark:text-violet-50">Semantic Segmentation for Autonomous City Driving</h3>
            <BsStars className="text-3xl text-pink-900 -ml-12 dark:text-violet-50"/>
          </div>

          <div className="text-center max-w-xl mx-auto p-5">
            <h3 className="text-md font-medium sm:text-xl mb-10 md:text-2xl dark:text-violet-300">Implementing the U-Net architecture for semantic segmentation with the Cityscapes dataset.</h3>
            <div className="h-auto">
                <figure>
                <Image src={vision2} alt="" className="rounded-lg object-contain shadow-lg dark:shadow-violet-700"/>
                </figure>
            </div>
            <h1 className="font-semibold text-md text-justify py-5 md:text-xl dark:text-violet-200">
            Project Overview
            </h1>
                
            <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            For the final project of our Computer Vision class, our team decided to tackle the 
            classic task of pixel-by-pixel semantic segmentation on the CityScapes dataset. Semantic 
            segmentation is "the task of assigning a class label to every single pixel of an input image."
            In the context of our project, this means taking an image from the Cityscapes dataset, a benchmark of city road scenes,
            and accurately labeling every object in the image, whether it be a road, car, or pedestrian. By selecting
            this dataset, we were able to apply semantic segmentation to the greater task of autonomous city driving,
            as it is vital for a self-driving car to be able to differentiate between objects on the road. 
            <br></br>
            <br></br>
            To acheive our goal, we implemented the U-Net architecture. U-Net is a convolutional neural network (CNN) that
            uses an encoder-decoder structure to extract features at multiple dimensions and produce high-quality segmentation masks for all objects in an image. 
            The encoder part of the network consists of convolutional layers that progressively reduce the spatial resolution of the input image while increasing 
            the number of feature channels. This allows the network to learn increasingly abstract and high-level representations of the input image. 
            The decoder part of the network then takes the feature maps from the encoder and up-samples the maps to restore the original resolution of the 
            input image. The decoder also incorporates skip connections that allow spatial information from the encoder to be propagated directly to the decoder layers. 
            By incorporating high-resolution spatial information, the decoder can pinpoint features and produce intricate segmentation masks.
            <br></br>
            <br></br> 
            The Cityscapes dataset contains 5,000 densely labeled and 20,000 coarsely labeled 2048 x 1024 images, captured in several German cities.
            For our project, we took the subset with 5,000 images and fine-grained annotations. While the dataset originally contained 30 different 
            object classes, we decided to compress that number to 20 by focusing on specific classes that we thought would be essential for semantic segmentation: 
            road, sidewalk, building, wall, fence, pole, traffic light, traffic sign, vegetation, terrain, sky, person, rider, car, truck, train, motorcycle, and bicycle. 
            <br></br>
            <br></br>
            By the end of this project, we improved both accuracy and loss by modifying features of the U-Net architecture, namely convolutions 
            per block, model depth, and skip connections. By rebuilding the model under the hood, we were able to better understand the 
            intricacies of U-Net and how changing the architecture impacts its performance. In fact, we were able to improve the U-Net model
            to detect and classify fine-grained features such as far-away pedestrians in city scenes. As one can imagine, this is a key
            functionality of automomous city driving which the baseline model lacked. 
            <br></br>
            <br></br>
            </p>
            
            <div className="h-auto">
                <figure>
                <Image src={vision3} alt="" className="rounded-lg object-contain shadow-lg dark:shadow-violet-700"/>
                <figcaption className='mt-2 text-sm font-medium dark:text-violet-200'>The Classic U-Net Architecture</figcaption>
                </figure>
            </div>

            <h1 className="font-semibold text-md text-justify py-5 leading-8 md:text-xl dark:text-violet-200">
            Our Method
            </h1>

            <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            Our model uses the standard U-Net architecture with 2 convolutional layers and a depth of 4 (four respective downsampling and upsampling steps).
            We began with building a basic U-Net model for binary biomedical semantic segmentation. The model takes in a black-and-white medical image 
            and outputs a single mask that distinguishes between two classes. After debugging the binary semantic segmentation model, we built a robust 
            ecosystem to support city segmentation. Building a system upfront that could scale sustainably was a high priority as we did not want our code
            to fall apart at the seams. 
            <br></br>
            <br></br>
            In order to adopt the initial binary U-Net model to our multi-class Cityscapes dataset, we created a data loader to preprocess the Cityscapes data 
            and adjusted our model to take in Cityscapes images. We built separate files for the baseline model architecture, as well as training, testing, visualizing, 
            and utility functions. Wiring up all of these files was very challenging, but the cleanly structured code soon proved to be a blessing. Finally, we built in 
            multi-class detection to handle a variable number of object classes. Cityscapes provides labels for 34 classes, and we selected the 20 most common classes. 
            <br></br>
            <br></br>
            Next, we set up our training function. After playing around with hyperparameters on our validation set, we selected a learning rate of 1e-4, batch size of 16,
            and 5 epochs of training per model. In addition, we picked cross-entropy loss for our evaluation metric and the Adam optimizer to update our gradients due to its
            efficiency. Every 40 batches in our training loop, we plot training and validation loss.
            <br></br>
            <br></br>
            </p>

            <div className="h-auto">
                <figure>
                <Image src={vision4} alt="" className="rounded-lg object-contain shadow-lg dark:shadow-violet-700"/>
                <figcaption className='mt-2 text-sm font-medium dark:text-violet-200'>Our U-Net Model</figcaption>
                </figure>
            </div>

            <h1 className="font-semibold text-md text-justify py-5 md:text-xl dark:text-violet-200">
            Evaluation and Results
            </h1>
      

            <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            The quantitative metrics we chose to evaluate our models were pixel accuracy, specificity, sensitivity, and F1.
            To calculate accuracy metrics we used our models’ predictions on the validation segment of the dataset since Cityscapes 
            does not give access to the masks of the test images. 
            After training our baseline model for five epochs, we found that it had a final training and validation cross-entropy loss of 0.5539 and 0.7680, 
            respectively. Since both of these values are close to 0, this means our baseline model had a fairly good performance. 
            <br></br>
            <br></br>
            Next, after testing our model on our validation set, we found that it had a specificity of 0.9872, which means it was able to detect most of the pixels 
            that were actually negative for a given class. However, its sensitivity and F1 scores were rather low, 0.3074 and 0.3091, which suggests that the model
            struggles with classifying positive pixels correctly.
            Finally, our baseline model had a pixel accuracy of 0.7679, meaning it was able to classify 76.79% of the pixels as belonging to the correct segment.
            <br></br>
            <br></br>
            When looking at the predicted masks, we found that our baseline could correctly segment low-level features such as roads (though with some “blobiness” and inaccuracy). 
            However, it was completely glossing over high-level features. In fact, it was not able to recognize pedestrians or road signs at all. This inspired our first modification
            – increasing the number of convolutions per block from 2 to 3 – as we were hoping that this change would be able to capture and preserve more high-level features as the model 
            downsampled.
            <br></br>
            <br></br>
            </p>

            <div className="h-auto">
                <figure>
                <Image src={vision5} alt="" className="rounded-lg object-contain  dark:shadow-violet-700"/>
                <figcaption className='mt-2 text-sm font-medium dark:text-violet-200'>Baseline Loss Plots</figcaption>
                </figure>
            </div>

            <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            <br></br>
            To improve upon the baseline's performance, both in terms of accuracy metrics and the model's ability to pick-up on high-level image features, 
            we modified the U-Net architecture as follows: increasing convolutions per block to 3 layers, increasing model depth to 5 layers,
            replacing max-pooling with average-pooling, using a weighted class loss function, using color jitter data augmentation, and a combination of all five changes. 
            Our experiments allowed us to understand which changes on the model architecture improved the model and which ones did not. 
            <br></br>
            <br></br>
            We found that the most impressive improvements resulted from our Five Depth and Average Pooling models. Not only was there an improvement across all metrics, but we also
            noticed the model was able to recognize pedestrains much better than the baseline. 
            <br></br>
            <br></br>
            With the Five Depth model, we hypothesized that by analyzing the given scene from a wider range of resolutions, the deeper network would learn more complex features of the image.
            Our hypthesis proved to be correct, as increasing network depth allowed the model to “look around” more effectively within the road scene and finally recognize small objects like people.
            In addition, we thought that changing the pooling method from max to average pooling could improve our model's performance. This is because max pooling causes losses in the data representation due to only keeping the highest-value pixels. 
            In other words, it was possible that the max pooling layers caused the human features to be lost since they are only a small part of any image.
            Similarly to the Five Depth model, the Average Pooling network helped the model recognize high-level features such as pedestrians in the street scenes. However, the segmentations in the Five Depth model are a bit sharper than the Average Pooling model. 
            This makes sense since average pooling, while improving on the general recognition of fine-grained features, is bound to lose some distinctions between classes. 
            <br></br>
            <br></br>
            We also found moderate improvement across some metrics with our Three Layer, Color Jitter, and Weighted Class Loss models. The “Supreme Model” that we proposed,
            which combined the Average Pooling, Weighted Class Loss, Five Depth, and Color Jitter, contrary to our expectations, performed worse than our baseline model across all 
            four metrics (pixel accuracy, specificity, sensitivity, and F1). Although we hypothesize that the model might be overfitting to the data, we have not conducted enough 
            analysis to understand why the supreme model is worse. 
            <br></br>
            <br></br>
            </p>

            <div className="h-auto">
                <figure>
                <Image src={vision6} alt="" className="rounded-lg object-contain dark:shadow-violet-700"/>
                </figure>
            </div>

            <h1 className="font-semibold text-md text-justify py-5 leading-8 md:text-xl dark:text-violet-200">
            What I Learned
            </h1>

            <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            This project was a great introduction on how to apply a CNN model, which we had learned about and implemented
            in class before, to a real-word computer vision task! I learned a lot about how data loaders work, how to preprocess image
            data, and how to organize our large model into training, testing, visualization, and utility files. Figuring out how to best 
            visualize and save our models as they learned was key, as training each model could take many hours. It was also really cool seeing 
            how easy it was to adjust and train our various U-Net models after the baseline was set up correctly. To me, that was a sign
            that we did a great job of making our code flexible and repurposable from the get-go. Of course, this was also an excellent
            introduction to semantic segmentation, and I can confidently say that I know and understand the U-Net model like the back of my hand. 
            <br></br>
            <br></br>
            Acknowledgement: this page pulls from our final project writeup, which was written by me and my two partners. 
            </p>
          </div>
        </section>
      </main>
    </>
  )
}