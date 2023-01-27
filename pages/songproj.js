import Navbar from 'components/navbar'
import Image from "next/image"
import music3 from '../public/music3.png'
import music2 from '../public/music2.png'
import music4 from '../public/music4.png'
import {BsStars} from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <main className="bg-pink-50 px-10 md:px-10 lg:px-20 dark:bg-violet-900">
        <section className=" bg-pink-50 min-h-screen dark:bg-violet-900">
          <Navbar />
          
          <div className="p-5 flex gap-16 justify-center">
            <BsStars className="text-3xl text-pink-900 dark:text-violet-50"/>
            <h3 className="text-3xl text-pink-900 font-burtons text-center md:text-4xl dark:text-violet-50">Predicting Song Popularity</h3>
            <BsStars className="text-3xl text-pink-900 dark:text-violet-50"/>
          </div>

          <div className="text-center max-w-xl mx-auto p-5">
            <h3 className="text-2xl font-medium mb-10 md:text-3xl dark:text-violet-300">Using Machine Learning to predict the popularity of a song based on its acoustic features</h3>
            <div className="h-auto">
                <Image src={music2} alt="" className="rounded-lg object-cover shadow-lg dark:shadow-violet-700"/>
            </div>
            <h1 className="font-semibold text-md text-justify py-5 md:text-xl dark:text-violet-200">
            Project Overview
            </h1>
                
            <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            This was a project developed throughout the entire semester of my SML312 (Research Projects in Data Science) class. My research question was whether it was possible to predict the popularity of a song using its acoustic features alone. For this project, 
            I followed the data science life cycle by finding my own datasets, performing the necessary data cleaning and exploration, building baseline models, and optimizing my models with techniques like regularization and hyperparameter tuning. 
            I used several Python libraries including NumPy, pandas, and sklearn's classification models.
            <br></br>
            <br></br>
            While it has been proven possible to predict a song’s popularity based on factors like its initial debut success and an artist’s social media presence, it is more useful to predict a song’s success independent of any existing popularity, before it is even released.
            This is what motivated my research question, and why I selected only the song's release year (in addition to its acoustic elements) as my training features.
            I used two datasets, both of which had acoustic data on thousands of songs collected using Spotify's API. One of the datasets uses the number of recent plays (which I assume is based on Spotify plays) to calculate popularity and the other uses data from past weekly Billboard Hot-100 lists. 
            </p>
            <h1 className="font-semibold text-md text-justify py-5 leading-8 md:text-xl dark:text-violet-200">
            My Process
            </h1>
            <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            I began answering my research question by starting with data cleaning, EDA, and a simple linear regression model using my first dataset. This acheived very poor results, despite trying to use polynomial features, regularization, and combinations of the two.
            While I planned to focus specifically on one genre of music to reduce the variability of acoustic features in my data, I soon found that this approach was not producing the results I had hoped for. 
            <br></br>
            <br></br>
            Therefore, I moved on to my second dataset, which was better suited for classification models since it has a popularity score of 0 or 1. I selected a SVM, KNN, Logistic Regression, Gaussian NB, Decision Tree, and Random Forest for my models, and optimized them with hyperparameter tuning. 
            </p>

            <h1 className="font-semibold text-md text-justify py-5 md:text-xl dark:text-violet-200">
            Results
            </h1>
            <div className="h-auto">
                <Image src={music4} alt="" className="rounded-lg object-cover shadow-lg dark:shadow-violet-700"/>
            </div>

            <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            <br></br>
            Overall, I learned that my question is much more suited for classification than linear regression. This is likely because both of my datasets are not linearly separable and need more complicated algorithms to determine trends and patterns in the data. 
            The best linear regression model I developed was the model that included one-hot encoded genres, which had a testing score of 0.28 :( But the best classification model I developed was the optimized random forest model with a max depth of 400 levels and a testing 
            score of 0.78! I believe my random forest model performed the best because it aggregates multiple decision trees with random samples of data, meaning those trees will all consider different acoustic features. This makes it a very expansive model that considers a lot of different features and 
            performs efficient feature reduction on those that are not significant.
            <br></br>
            <br></br>
            Across all my datasets and models, instrumentalness always appeared in my lists of highly correlated features during EDA and most important features during my modeling. I can therefore conclude that instumentalness is a very high indicator of popularity. It seems that in general, people prefer 
            listening to songs with a lower instumentalness level, with completely instrumental tracks rarely being popular. Some other features that were commonly assigned a high correlation/ weight were loudness, danceability, and speechiness. It seems that in general, tracks that are loud and danceable are more popular 
            and tracks that are very speechy are less popular. This makes sense since tracks that are completely spoken word are not likely to be played on the radio as a top hit, but loud songs that people can dance to are. 
            <br></br>
            <br></br>
            </p>
            <div className="h-auto">
                <Image src={music3} alt="" className="rounded-lg object-cover shadow-lg dark:shadow-violet-700"/>
            </div>
            <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            <br></br>
            This project was a great learning experience and really taught me how to own my work from start to finish. I learned a lot about the iteration that is required in a data science project, and how to think outside the box/ try new things. 
            If I were to continue my research, I would likely try more advanced models such as a convolutional neural network that could learn the relevant acoustic features directly from audio samples. I would also look into developing my own popularity metric using Spotify charts. One topic I’m interested in is micro-trends, 
            which is when trends stay popular for a very short period of time such as a month or even a week. It would be interesting to see if I could fine-tune my model to capture musical micro-trends. This may require using more time-specific Spotify charts (such as weekly or monthly charts) to develop my popularity metric. 
            </p>
          </div>
        </section>
      </main>
    </>
  )
}