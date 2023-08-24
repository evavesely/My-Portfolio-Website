import Navbar from 'components/navbar'
import Image from "next/image"
import gender1 from '../public/gender1.png'
import gender2 from '../public/gender2.png'
import gender4 from '../public/gender4.png'
import gender5 from '../public/gender5.png'
import {BsStars} from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <main className="bg-pink-50 px-10 md:px-10 lg:px-20 dark:bg-violet-900">
        <section className=" bg-pink-50 min-h-screen dark:bg-violet-900">
          <Navbar />
          
          <div className="p-5 flex gap-16 justify-center">
            <BsStars className="text-3xl text-pink-900 -mr-12 dark:text-violet-50"/>
            <h3 className=" text-2xl sm:text-3xl text-pink-900 font-burtons text-center md:text-4xl dark:text-violet-50">Gendered Differences in Movie Dialogue</h3>
            <BsStars className="text-3xl text-pink-900 -ml-12 dark:text-violet-50"/>
          </div>

          <div className="text-center max-w-xl mx-auto p-5">
            <h3 className="text-md font-medium sm:text-xl mb-10 md:text-2xl dark:text-violet-300">An NLP investigation into the linguistic differences of movie dialogue based on the gender of the speaker. </h3>
            <div className="h-auto">
                <figure>
                <Image src={gender1} alt="" className="rounded-lg object-contain shadow-lg dark:shadow-violet-700"/>
                </figure>
            </div>
            <h1 className="font-semibold text-md text-justify py-5 md:text-xl dark:text-violet-200">
            Project Overview
            </h1>
                
            <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            The main goal of this project was to use Natural Language Processing
            (NLP) to analyze the quantitative and qualitative differences in movie dialogue based on the gender
            of the speaker; this served my larger purpose of illuminating discrepancies in the way that men
            and women behave in popular movies and how this aligns with real-world gender stereotypes. 
            <br></br>
            <br></br>
            To accomplish this analysis, I used the Cornell Movie-Dialogs Corpus, which is “a large 
            collection of fictional conversations extracted from raw movie scripts (220,579 conversational
            exchanges between 10,292 pairs of movie characters in 617 movies)”. In addition to storing individual 
            utterances, the dataset also contains conversations between multiple speakers and useful metadata 
            pertaining to the speakers themselves, including their genders, making it a perfect fit for my project!
            <br></br>
            <br></br>
            My approach can be broken up into two parts:
            </p>
            <ul className="list-disc text-md text-justify mt-5 leading-8 md:text-xl dark:text-violet-200">
            <li>First, I compared the dialogue of male and female speakers using term frequency, sentiment
            analysis, and unique terms. To accomplish this, I extracted all the unigrams, bigrams, and trigrams
            within the dialogue corpora of both genders and performed sentiment analysis on them using the TextBlob
            library. I then isolated the two genders' most distinctive terms when I ranked their n-grams by
            their TF-IDF scores. This allowed me to look for interesting patterns among the unique terms uttered by both
            genders. </li>
            <br></br>

            <li>Second, I compared how male and female speakers refer to one other. To accomplish this task, I first created 
            a list of target-words that could serve as a stand-in for gender, such as “man,” “woman,” “male,” “female,” etc. 
            I then fed both the male and female dialogue into two separate pre-trained Word2vec models and used them to attain
            lists of words most similar to my target-words in the dialogue of both genders. By investigating which words were most
            closely associated with my target-words, I was able to see how both genders are referred to or represented in popular movies. </li>
            </ul>
           
            <h1 className="font-semibold text-md text-justify py-5 leading-8 md:text-xl dark:text-violet-200">
            EDA and Data Cleaning
            </h1>

            <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            The Cornell Movie-Dialogs Corpus stores information about speakers, utterances (individual snippets 
            of dialogue uttered by a single speaker), and conversations in separate DataFrames. This made
            it possible to manipulate my dataset of speakers in Python, separating them by gender and token
            count and then obtaining the corresponding utterances for those set of speakers.
            <br></br>
            <br></br>
            Upon first look, one glaring issue with my data was that there are significantly more male than
            female speakers, with a total of 2,049 male speakers and only 966 female speakers. Inherently, this
            means that the dataset contains more male than female utterances as well. After using a tokenizer
            provided by NLTK, a Natural Language Toolkit, I found that it was also true that male characters
            uttered more tokens per character than female characters, with female characters speaking an average
            of 664.5 tokens per character and male characters speaking an average of 805.9 tokens per character. 
            Initially, I adjusted my dataset of male utterances such that its size was equal to my dataset of female
            utterances; however, even this measure could not solve the intrinsic issue of male characters simply
            having more lines and longer utterances in movies.
            <br></br>
            <br></br>
            Another step I took during my data cleaning phase was removing minor characters (those who utter 
            less than x number of tokens).
            Initially, I decided that in order for a character to be considered non-minor, they should speak at least 200 tokens. 
            However, I then adjusted the threshold to be the 25th percentile of token counts for both genders. This led to a change in my
            results, which inspired me to study the differences in dialogue based on the number of total tokens
            spoken by a character. 
            <br></br>
            <br></br>
            In order to accomplish this, I created a dataset of utterances for characters who
            speak at most the 25th percentile of tokens per character for their gender, between
            200 tokens and the 25th percentile, more than 200 tokens, and more than the 25th percentile. Let’s
            call the first group <b className='text-pink-900  dark:text-violet-50'>minor</b> characters, the second
            <b className='text-pink-900  dark:text-violet-50'> difference</b> characters (since they represent the
            difference between non-minor and semi-minor characters), the third <b className='text-pink-900  dark:text-violet-50'>semi-minor</b> characters, and the
            last <b className='text-pink-900  dark:text-violet-50'>non-minor</b> characters. During this step of my analysis, I decided not to adjust my datasets of
            male utterances to be equal to the size of female utterances, as I found that taking random subsets
            of my male data was creating too much variation in the results, making this type of fine-grained
            comparison difficult.
        
            </p>

            <h1 className="font-semibold text-md text-justify py-5 md:text-xl dark:text-violet-200">
            Dialogue Analysis
            </h1>
      

            <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            In order to start analyzing interesting variations in the dialogue of male and female speakers, I
            first extracted the n-grams, or continuous sequences of “n” tokens, in the utterances of non-minor
            characters of both genders.
            I chose to extract unigrams, bigrams, and trigrams, meaning that I selected continuous sequences with one, two, and three tokens.       
            In order to extract the n-grams, I
            used scikit-learn’s CountVectorizer method, which takes a collection of text documents as input and
            outputs n-gram counts based on a specified range (in this case 1-3).
            <br></br>
            <br></br>
            After extracting the n-grams and obtaining their frequencies, I performed Sentiment Analysis
            on the n-grams of both genders.
            In my version of Sentiment Analysis, I used the TextBlob library, which returns the polarity
            and subjectivity of a collection of tokens. The polarity score lies between [-1, 1], -1 conveying a
            negative sentiment and 1 conveying a positive sentiment. Meanwhile, subjectivity lies between [0,
            1] and conveys the amount of personal opinion or objective fact in a piece of text, with 0 being most
            objective and 1 being most subjective. However, after applying the polarity and subjectivity methods
            to my n-grams, I found that a lot of the values were 0. Therefore, to allow for more interesting
            comparisons between male and female speakers, I isolated the top 20 most frequent n-grams where
            the polarity and subjectivity scores were not both 0.
            I was also able to obtain the total polarity and
            subjectivity scores for both genders, normalized by the number of n-grams extracted from each
            group to allow for comparison.
            <br></br>
            <br></br>
            </p>
           
            <div className="h-auto">
                <figure>
                <Image src={gender2} alt="" className="rounded-lg object-scale-down h-96  dark:shadow-violet-700"/>
                <figcaption className='mt-2 text-sm font-medium dark:text-violet-200'>Top 30 Female Speaker N-grams Ranked by TF-IDF</figcaption>
                </figure>
            </div>
           
           <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            <br></br>
            To complete the first part of my approach, I isolated the most distinctive n-grams of each gender
            using their TF-IDF scores. TF-IDF stands for Term Frequency-Inverse Document Frequency, and
            represents how important a term is to a specific document in relation to the entire corpus. Since
            I worked with a dataset of utterances instead of documents, a large TF-IDF score means that an
            n-gram is important, or appears frequently, among a subset of utterances but is relatively rare across
            the entire dataset. To accomplish this task, I used scikit-learn’s
            TfidfVectorizer method; this allowed me to obtain the top 30 n-grams of each gender ranked by
            their TF-IDF scores.
            <br></br>
            <br></br>
            Next, I repeated this process of extracting n-grams, computing sentiment scores, and ranking
            by TF-IDF for all of my groups (non-minor, semi-minor, difference, and minor).
            <br></br>
            <br></br>
            For the second part of my approach, I tackled the question of how male and female characters talk
            about each gender. In order to do this, I create a list of “target-words”, or words that serve as a
            stand-in for gender. After playing around with my list, I finalized it to be: [Woman, Man, Girl, Boy,
            Girlfriend, Boyfriend, Daughter, Son, Mother, Father, Wife, Husband, Mrs., Mr., Female, Male,
            She, and He]. 
            <br></br>
            <br></br>
            First, I fed my set of male and female utterances into two pre-trained Word2vec models,
            which is a model that outputs vector representations of words. From there, I used the “male” and
            “female” models’ most_similar feature (which outputs the top 10 most similar words based on
            cosine similarity) to obtain a list of words most similar to each target-word. For instance, to
            see an example of how female characters talk about the opposite gender, I obtained the output
            for word2vec.wv.most_similar(“man”) using the Word2vec model that received my set of female
            utterances as input.
            <br></br>
            <br></br>
            </p>

            <div className="h-auto">
                <figure>
                <Image src={gender4} alt="" className="rounded-lg object-contain h-96  dark:shadow-violet-700"/>
                <figcaption className='mt-2 text-sm font-medium dark:text-violet-200'>Words Most Similar to "Female" and "Male" for Semi-Minor Female Speakers</figcaption>
                </figure>
            </div>
           
            <h1 className="font-semibold text-md text-justify py-5 md:text-xl dark:text-violet-200">
            Results
            </h1>

            <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            From my analysis, I have found that there is a distinct difference in the dialogue of female and male
            speakers in popular movies. First, it became evident that not only are there more male speakers (and
            therefore male utterances) in my dataset, there are also more tokens per male character than tokens
            per female character. In other words, male characters simply talk more in movies. 
            <br></br>
            <br></br>
            After digging deeper into the dialogue, it is also evident that female characters tend to talk more about thoughts,
            feelings, and emotions and use more polite language than male characters. This is evident by the
            higher frequency of the word “love” and “sorry” among the n-grams of female characters, and the
            prevalence of the word “love” in the target-word analysis for female dialogue. 
            <br></br>
            <br></br>
            In addition, several swear words were found among the frequent n-grams of male characters while not appearing
            at all among the frequent n-grams of female characters, indicating that swearing is more common
            among male characters. These themes were further exemplified by the top TF-IDF terms of male
            and female characters, where I found that female characters use more language relating to emotions,
            relationships, and death while male characters rely more on swearing, slang, and corporeal language.
            There was also a clear male pattern of terms relating to violence and money. This trend of slang-use
            and food/eating related language was also prevalent in the target-word analysis of male speakers.
            <br></br>
            <br></br>
            Finally, when comparing how these trends changed based on a character's prominence in a film, 
            I found that women tend to use more positive and affirmative language as their roles
            become more minor while male characters tend to rely more on violence, swearing, and slang as
            they grow more minor. These findings indicate that movies perpetuate gender roles and stereotypes found in
            the real world, mostly through their minor characters
            </p>

            <h1 className="font-semibold text-md text-justify py-5 md:text-xl dark:text-violet-200">
            What I Learned
            </h1>
            
            <p className="text-md text-justify leading-8 md:text-xl dark:text-violet-200">
            
            This project taught me a lot about how to process text data, common NLP techniques, and the iterative process
            of pursuing a research question. I also grew familiar with how to use essential NLP libraries, methods, and models such as NLTK, 
            TextBlob, CountVectorizer, TfidfVectorizer, and Word2Vec.  
            <br></br>
            <br></br>
            One of the main, somewhat unexpected, limitations in my study was the difference in the number
            of male and female utterances. This issue became especially problematic while performing my
            target-word analysis, when the output for female characters tended to be the same set of simple
            words while the output for male characters tended to be much more varied with very dense, complex 
            language. However, my initial solution of taking a random subset of the male utterances
            created too much variance in my output.
            <br></br>
            <br></br>
            In addition, this problem revealed some flaws in taking
            a qualitative approach to my analysis, as I would sometimes use my own biases of what
            stereotypical male and female speech looks like to chase the “best” output, i.e. more examples
            of women discussing love, relationships, and emotions and more examples of male swearing,
            slang, and explicit language. 
            <br></br>
            <br></br>
            In the future, I would consider omitting unigrams
            from my results due to their lack of context and supplementing my qualitative analysis with more
            quantitative analysis. For instance, I could find the sentiment scores of the top TF-IDF terms
            and target-word output of both genders. In addition, I could perform topic-modeling to extract
            the main themes of male and female dialogue without having to deduce them myself from my output.
            <br></br>
            <br></br>
            Overall, this project was a great learning experience and I can't wait to keep working on it for my 
            senior thesis!
            <br></br>
            <br></br>
            </p>

            <div className="h-auto">
                <figure>
                <Image src={gender5} alt="" className="rounded-lg object-contain shadow-lg dark:shadow-violet-700"/>
                </figure>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}