
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

const fullpageOptions = {
    anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
    sectionsColor: [
        "#d68346",
        "#db915b",
        "#db915b",
        "#df9f70",
        "#df9f70", // 5
        "#e4ad85",
        "#e9bb9a",
        "#e9bb9a",
        "#edc9af",
        "#edc9af", // 10
        "#e4ad85",
        "#e4ad85",
        "#df9f70",
        "#df9f70",
        "#db915b", // 15
        "#db915b",
        "#e09f70",
        "#e4ad85",
        "#e4ad85",
    ],
    callbacks: ['onLeave', 'afterLoad'],
    navigation: true,
    navigationPosition: 'right',
    responsiveWidth: 600,
    responsiveHeight: 600
}

function Jplayer(props) {
    return (<AudioPlayer
        // autoPlay
        src={props.src}
        customAdditionalControls={[]}
        style={{
            width: '500px',
            color: '#f2d7c4',
        }}
    />);
} 

const FullpageWrapper = fullpageProps => (
    <ReactFullpage
        {...fullpageOptions}
        render={({ state, fullpageApi }) => {
            console.log('render prop change', state) // eslint-disable-line no-console

            if (state.callback === 'onLeave') {
                if (state.direction === 'down') {
                    console.log('going down...' + state.origin.index)
                }
            }
            return (
                <div id="fullpage-wrapper">
                    <div className="section section1">
                        <div className="jheader">Japanese Internment Exhibit</div>
                        <div className="center_solo_text">
                        <p>
                            The United States Government between 1942 and 1946, forced the internment of 120,000 Japanese Americans into desert prison camps within the United States without due process. Of those imprisoned, 2/3rds had <b> United States citizenship</b>, while the rest were ineligible for citizenship under US law at the time. Most were forced to sell homes, family plots, and were only allowed to take what they could carry.
                    </p>

                        </div>
                    </div>
                    <div className="section fp-auto-height-responsive">
                        <div className="full-page-photo">
                            <img src={'../../section1_grocery.jpg'} alt="Grocery Store" />
                        </div>
                    </div>
                    <div className="section fp-auto-height-responsive">
                        <div className="full-page-photo">
                            <img src={'../../kids_wire.jpg'} alt="Behind barbed wire." />
                        </div>
                    </div>

                    <div className="section fp-auto-height-responsive">
                        <div className="jheader">Deciding the Fate of Japanese Americans</div>
                        <section class="single-photo">
                            <img src={'../../drseuss.jpg'} alt="Image from Dr. Seuss" />
                        </section>
                        <div className="caption">Japanese propaganda by Geisel Seuss.</div>
                    </div>

                    <div className="section fp-auto-height-responsive">
                        <div class="center_solo_text">
                        <p>
                            In 1941 US Intelligence report "Munson Report" commissioned by President Franklin Roosevelt concluded that the great majority of Japanese Americans are loyal to the U.S. and do not pose a threat to national security in the event of war with Japan. The report was passed to Roosevelt noting that, "The essence of what [Munson] has to report is that, to date, he has found no evidence which would indicate that there is danger of widespread anti-American activities among this population group. He feels that the Japanese are more in danger from the whites than the other way around."
                        </p>
                        <p>
                                A year after, in the aftermath of Pearl Harbor attacks, Roosevelt issued Executive Order 9066, which authorized the exclusion of any and all persons from coastal regions. Executive orders are used by the president of the US that remain in force until they are canceled, revoked, adjudicated, expire or determined unlawful. Even though it did not specify the Japanese by name, it was quickly applied to virtually all Japanese Americans living in the border regions of California, Oregon, Arizona, and Washington. The US carried out the exclusion and forced removal of all persons of Japanese ancestry into the internment camps. These internment camps were akin to prison camps, surrounded with armed guards and barbed wire. Colonel Karl Bendetsen, the architect behind the program, went so far as saying anyone with "one drop of Japanese blood" qualified.
                        </p>
                    </div>
                    </div>

                    <div className="section fp-auto-height-responsive">
                        <div className="jheader">Taken From their Homes</div>
                        <section class="grid-text-left">
                            <div class="item-1">
                                <p>  It was 1942 when Hideyuki Nakamura at 11 years old, watched on as the local constable entered his house, and took away his father and his uncle from him. Soon after, the rest of the family had to abandon their home in Reedley, California, and "relocate". Several months later, Agnes Nishida, at 8 years old, alongisde her family, would also be sent to the internment camps.</p>
                                <p>
                                    They had no idea where they were going, or when, if ever, they would be allowed to return. All they knew was that they were only allowed to take what they could carry.
                        </p>
                            </div>
                            <div class="audioitem">
                                <Jplayer src='../../grandpa_family_taken.m4a' />
                            </div>
                        </section>
                    </div>

                    <div className="section fp-auto-height-responsive">
                        <div className="jheader">Gaman</div>
                        <div className="jsubheader">Enduring the seemingly unbearable with patience and dignity.</div>
                        <div className="center_solo_text">
                        <i>"'Only What We Could Carry' was the rule, so we carried Strength, Dignity and Soul." – Lawson Fusao Inada</i>

                        <p>
                                In the months following Executive Order 9066, Japanese Americans were first sent to "assembly centers", which were often horse race tracks or fairgrounds where they were kept until they were sent to internment camps. They had not had any charges of disloyalty, nor were they able to appeal for their loss of property and personal liberty.
                        </p>
                        <p>
                            Helen Abe was 8 years old when the FBI had tried to take away Helen's mother because she was a school teacher, and place her into the Crystal City internment camp in Texas. They ended up sending the two of them to the Santa Anita racetrack in California. "We had to live in the horse stalls... They just laid the asphalt right over the poop, everything. It was so hot the legs of the bed would sink in. The smell would really come up from below... We stayed there for 6 months. About 2 months in the horse stalls... Then they built some barracks in the middle of the racetrack. Japanese volunteers would make the food. The grandstands were used for making camoflage nets."
                         </p>
                            <div class="audioitem">
                                <Jplayer src='../../horse_stall_relocation.m4a' />
                            </div>
                        </div>

                    </div>

                    <div className="section fp-auto-height-responsive">
                        <section class="single-photo">
                        <img src={'../../santa_anita_conversion.jpg'} alt="Converting the racetrack." />
                        </section>
                    </div>
                    <div className="section fp-auto-height-responsive">

                        <div className="jheader">Internment Camps</div>
                        <section class="grid-text-left">
                            <div class="center_solo_text">
                        <p>
                                    Hideyuki and his family were sent to Poston, Arizona, to live in Block 308, a barrack insulated with light tar paper, the size of a small garage for the entire family of 10 people. He remembers stuffing sheets with straw to use as mattresses, and other times that he and his siblings would sleep outside on the ground.
                        </p>
                        <p>
                            When we walked to school we would collect adobe on the bottom of our shoes, we would get a little taller. We saw movies once a week. THey would put a fairly large building on the building that held Oil tank. I guess the federal government provided for that. In the wintertime, some people would build little charcoal tin cans, fill them with charcoal and keep them warm. We used to see movies that way. Eventually, in our camp they build an amphitheatre. They would have the projector showing a big screen for everybody to see movies, outdoors. Everyone bundles up in the winter, summertime is no problem, they would use a lot of little burners. Almost all the movies at the time were black and white, technicolor movies were in the future. White Christmas came up with Bing Crosby, it was winter time when it came out. They had dances in the mess hall. We didn't dance until the last year there, up until then we would watch.
                            // Their guns were always pointed in at us.
                        </p>
                        <p>
                                    Sam Morris "The chickens were living better than us. We put thick pink paper that we ordered from Montegory Ward. It helped keep the dust out in Tule. We had scorpions coming through. Non insulated. We had 2 rooms of 7 people. Arkansas was very humid. When it rained it would rain like you wouldn't believe."
                        </p>

                            </div>
                        </section>
                        
                    </div>


                    <div className="section fp-auto-height-responsive">
                        <section class="single-photo">
                            <img src={'../../internment_camp.jpg'} alt="Manazanar" />
                        </section>
                        <div className="caption">Manzanar Internment camp in California.</div>
                    </div>



                    <div className="section fp-auto-height-responsive">
                        < div className="jheader" > Fighting Back from Camp.</div >

                        < div className="jsubheader"> Loyalty - No No Boys</div>
                        <div className="center_solo_text_narrow">
                        <p>
                            In 1943, the loyalty of Japanese American was questioned in the form of a form that became known as the "loyalty questionnaire" with the intent of recruiting them into combat units and judge their "Americanness" or "Japaneseness". On it, there existed two questions that created outrage across those who were incarcerated.
                        </p>
                        <div className="blockquote">
                            Question 27) "Are you willing to serve in the armed forces of the United States on combat duty, wherever ordered?".
                        <br />
                        Question 28) "Will you swear unqualified allegiance to the United States of America and faithfully defend the United States from any and all attacks by foreign and domestic forces, and forswear any form of allegiance or disobedience to the Japanese Emperor, or any other foreign government, power, or organization"
                        </div>
                        <p>
                                Question 27 had been a difficult question for those who felt they were being forced into serving a country that was currently imprisoning them. Others felt that they could not risk seeing their family become any more separated than it already had.

                                Many of the Japanese Americans had been barred from becoming US citizens on the basis of race. Answering Question 28 with a yes and giving up their Japanese citizenship, would explicitly leave them stateless. They could neither hold a Japanese citizenship and return to Japan nor an American one in the place they were living. For those who were declared disloyal for how they answered these questions, they were sent to the Tule Lake internment center, which served as a segregation center for 18,000 "Disloyals."
                        </p>

                        </div>



                    </div>
                    <div className="section fp-auto-height-responsive">
                        <div className="center_solo_text_narrow">

                        <p>
                            Tule Lake due to its large population of dissidents was extremely strong politically, and this often lead to crackdowns from the military and camp directors. For many, choosing answers to these two questions created significant rifts between family members, where some couldn't bear to see their children go into the military after seeing so many of their children already separated by the service. Others distanced themselves from these people, not wanting to be seen as disloyal to the cause. It was a symbolic gesture for others, a few who would answer yes, but would then append in the margins "when we are returned our rights as American citizens". 17% of people answered no to both questions as a means of protest, becoming known as the "No-No Boys".
                        </p>
                        <p>

                                The director of the camp sought to deport many of these Japanese Americans by prompting them that the camps might close within the year, giving them the option to give up their United States Citizenship. At the time it did not seem like the citizenship had granted them any actual rights. Many feared that if they didn't give up their citizenship, they would be sent out into the surrounding communities and put in harms way at people that hated them for being enemies during the war. However, once they renounced their United States citizenship, a plan was set in action to attempt to deport them back to Japan. A civil rights lawyer from San Francisco challenged this notion, and successfully was able to stall the deportation of the Japanese Americans under the banner of legality, putting up nearly a decade long battle.
                        </p>


                            <div className="audioitem">
                                <Jplayer src='../../disloyals.wav' />
                            </div>
                            <div className="loyaltyqs">
                                < a href='https://docs.google.com/forms/d/1piBQRVso2j_d7QJsEBVSzOaTtQxHJ59urFERNJCbSUU/edit' > Take the loyalty questionnaire</a >
                            </div>

                        </div>
                    </div>
                   

                    <div className="section fp-auto-height-responsive">
                        < div className="jheader" > Fighting Back Physically</div>
                        < div className="jsubheader" >The Purple Heart Battalion - Go For Broke.</div>
                        <div className="grid_fighting">
                            <div className="item_text">
                        <p>
                            Despite denial of their civil rights, many Japanese Americans volunteered for the military service, even against some of their family's wishes. One argument had been that if they decided to not join the fighting force, FDR and people who were for the imprisonment of the Japanese people in the US, would use refusal to join the military as ammunition against them as being disloyal. One internee reflected on how he felt the wrongness of being put into the camp and afterwards, being asked to volunteer for the US army. He decided over this to go and serve, as it could mean ending incarceration quicker for his father. As they went through, freeing people in Europe from Nazi concentration camps, they had to deal with the their own families being kept unjustly by the country they were putting their lives on the line for. They were put into the 442nd infantry regiment made up almost entirely of Japanese American soldiers fighting in Europe.
                        </p>
                        <p>
                                Those who went, however, didn't hold back fighting for the country they were willing to sacrifice their lives for. They risked everything, fighting with the infamous motto of "Go For Broke."
                        </p>
                            </div>

                            <div className="item_442">
                                <div className="single-photo-medium">
                                    <img src={'../../442_volunteer.jpg'} alt="Japanese Americans volunteering for the war.." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section fp-auto-height-responsive">
                        <div className="grid_fighting">
                            <div className="item_text">
                        <p>
                            To illustrate, in one instance, the 442nd infantry was ordered to break an impenetrable German fortification built into the 3000ft high Apennine Mountains. It had withstood artillery, aircraft, and many other soldiers. The boys of the 442nd unit climbed up the steep back of mountains at night, saying, "If you fall, don't yell". Veteran Yoshio Nakamura remembers breaking the Gothic Line, "We climbed up this tremendous mountain in the dark, and surprised the German outpost on the high ground, and that ended the war in Italy."
                        </p>
                        <p>
                            When a general called the 442nd to assemble for a recognition ceremony, he only saw a few number of men in formation. The general allegedly reprimanded 442nd Lieutenant Colonel Virgil Miller, stating, "You disobeyed my orders. I told you to have the whole regiment." The teary - eyed Colonel looked him in the eye and reportedly said, "General, this is the regiment, the rest are either dead or in the hospital."
                        </p>
                        <p>
                                Of the 14, 000 soldiers who served in the 442nd, two thirds of them received purple hearts, and 21 of them received medals of honor, the highest individual military decoration awarded by the US government.They also received seven Presidential Unit Citations, the highest award for valor given to a military unit as a whole.The 442nd's effort helped convince Congress to end its opposition towards Hawaii's statehood petition, paving the way for it become the 50th state.
                        </p>
                            </div>
                            <div className="item_442">
                                <div className="single-photo-medium">
                                    <img src={'../../442_troops.jpg'} alt="Members of the 442nd regiment" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section fp-auto-height-responsive">
                        <div className="jheader" > Fighting Back Legally</div>
                        <div className="jsubheader" >Korematsu vs. United States </div>
                        <div className="center_solo_text">
                        <p>
                            American civil rights activist Fred Korematsu, with the help of the American Civil Liberties Union, challenged the constitutionality of Executive Order 9066, but it was upheld in 1944 by the U.S.Supreme Court in a 6 - 3 decision.The majority ruled that security measures were necessary, while the dissenting justices alluded to, either implicitly or overtly, the role Korematsu’s race played in the decision to intern him.
                        </p>
                        <p>
                            Justice Frank Murphy dissented, "No adequate reason [was] given for the failure to treat these Japanese Americans on an individual basis by holding investigations and hearings to separate the loyal from the disloyal, as was done in the case of persons of German and Italian ancestry." He further questioned the military's claim of urgency when nearly four months had elapsed after Pearl Harbor before the first exclusion order was issued. A case of imminent danger would have warranted a declaration of martial law. "I dissent, therefore, from this legislation of racism," he stated, "Racial discrimination in any form and in any degree has no justifiable part whatever in our democratic way of life."
                        </p>

                        <p>
                                Although Korematsu vs. US has never formally been overturned, Chief Roberts in Trump Vs. Hawaii 2018 offered the most powerful rebuke of the result of the Korematsu case at the Supreme Court since the original dissents:  "[...] Korematsu has nothing to do with this case. The forcible relocation of U. S. citizens to concentration camps, solely and explicitly on the basis of race, is objectively unlawful and outside the scope of Presidential authority [...] The dissent’s reference to Korematsu, however, affords this Court the opportunity to make express what is already obvious: Korematsu was gravely wrong the day it was decided, has been overruled in the court of history, and—to be clear—“has no place in law under the Constitution.”
                        </p>
                        </div>
                    </div>

                    <div className="section fp-auto-height-responsive">
                        <div className="full-page-photo">
                        <img src={'../../trio.jpg'} alt="  Gordon Hirabayashi, Minoru Yasui, and Fred Korematsu." />
                        </div>
                    </div>

                    <div className="section fp-auto-height-responsive">
                        <div className="jheader">Life after the camps </div>
                        <div className="jsubheader">"Going to the camps was easy, coming out was not".</div>

                        <section class="grid-text-left">
                            <div class="item-1">

                        <p>
                                    General DeWitt, one of those largely responsible for the incarceration of the Japanese Americans, pronounced "There is a feeling developing, I think, in certain sections of the country, that the Japanese should be allowed to return. I am opposing it with every proper means at my disposal." Calls began getting made that all Japanese Americans should be stripped of citizenship, reduced in their ability to own land, deported where possible, and prevented from returning. Organizations began sprouting up like the Japanese Exclusion League in Bellevue, Washington and the Remember Pearl Harbor League in Seattle. Earl Warren, after becoming the governor of California, said, "We don't propose to have the Japs back in California during this war if there is lawful means of preventing it."
                        </p>
                        <p>
                            When families would return home, they would find that their homes were taken over by other people, vandalised, sold, or their possessions plundered.Their previous jobs were denied being returned to them on the basis of their Japanese ancestry, bosses telling them to stay home. Landlords were unwilling to provide housing to Japanese American families because they did not want any Japanese people to live with them.
                        </p>
                        <p>
                                    One daughter accounts how her dad took his own life because he was unable to get a job and provide for his family. A mother remembers how she and her daughter would seek rent in many different places after taking the train to Chicago only to be left homeless, but the War Relocation Authority asked them to take a picture to use for a pamphlet that would be used to convince other Japanese people to come and live in Chicago. She remembers walking around the city for entire days looking at for rent signs, but being told the places had already been rented when they would ask to rent the place. After the boys from the 442nd came back from serving, they would be denied haircuts even while they were still in uniform. "They wouldn’t give him a haircut because he was Japanese. But he wasn’t Japanese. He was a Japanese American soldier”
                            </p>
                            </div>
                            <div class="audioitem">
                                <Jplayer src='../../murasa_shot_at.wav' />
                            </div>

                        </section>
                    </div>

                    <div className="section fp-auto-height-responsive">
                        <div className="jheader">Modern Day Echoes</div>
                        <div className="grid_fighting">
                            <div className="item_text">
                        <p>
                                    The argument for national security in World War 2 that led to the internment of the Japanese American people has become the center stake in the "re-education" an estimated 1 million Uyghur people in China. Located in the Western region of China, the country has began implementing layers of surveillance, strict policies and concentration camps for the reported reduction of terrorism and ethnic unity of China. Given the ability of the central power in China to move as quickly as other countries in war time, they are able to move on any notion of fear without a fear of national backlash nor internal. Fuelling the support for their concentration camps with propaganda and surveillance, the government holds tight control on their public unity. Weaving together a deep state of surveillance, they are able to stop terrorism by keeping people in a great amount of fear of non government approved activities. It feels all too similar, the concept of safety in the interior for the massive rights being taken away from a minority painted to be dangerous, left without the tools to defend themselves, wondering how they should act.
                        </p>
                            </div>
                            <div className="uyghur_protest">
                                <div className="single-photo-medium">
                                    <img src={'../../uyghur_protest.png'} alt="Protest mask." />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="section fp-auto-height-responsive">
                        <div className="full-page-photo">
                            <img src={'../../fences_sitched.jpg'} alt="Re-education camp for Uyghurs" />
                        </div>
                        <div className="caption">Crystal City Internment Camp (Left), Uyghur "Re-education" Camp (Right).</div>
                    </div>

                    <div className="section fp-auto-height-responsive">
                        <div className="jheader" >Japanese Internment.</div>
                        <div className="grid_vertical">
                            <div className="center_solo_text">

                            <p>
                                When the bombs dropped in Pearl Harbor, the horse stalls were still horse stalls. A few months later, President Franklin D. Roosevelt, issued Executive order 9066, legally permitting the incarceration of 120,000 people of Japanese descent living on the Western coast of the United States. Two of three of these people were American citizens, yet after that order had been announced, it did not matter. Over the next five years, they were forcibly removed from their homes, and pushed into one of ten "internment" camps. At the time, it had been said to be a war necessity. As the population found out later, it had not been a concern of the investigations into the threat of the Japanese people on the homefront, rather it had been a product of racism, economic threat, and fear mongering. Over the next four years, sitting in swamps to brazen deserts, the Japanese Americans attempted to rebuild their dignity while grappling with questions of loyalty and identity.
                            </p>
                            <p>
                                    In the words echoed by the notes left by those Japanese Americans internned in Manzanaar, "We can never forget what happened. And we will not let it happen again."
                            </p>
                                <div class="audioitem">
                                    <Jplayer src='../../younger_generation_to_remember.m4a' />
                                </div>
                            </div>
                            <div className="photo_vertical">
                                <img src={'../../camp_painting.jpg'} alt="At the moment it will feel normal." />
                            </div>
                        </div>
                    </div>


                    <div className="section fp-auto-height-responsive">
                        <div className="jheader" >Looking further</div>
                        <div className="center_solo_text">
                        <p>
                            If you are interested in learning more, I highly recommend the <a href="https://features.apmreports.org/order-9066/">"Order 9066"</a> podcast which does a great job going through the entire narrative of the internment, from before to far after.
                        </p>
                        <p>
                            In person, the <a href="https://www.nps.gov/manz/index.htm">Manzanar Internment Camp</a> outside of Los Angeles that many people make the short pilgrimage to on the West coast, that has barracks that can be visited as well as a center with artifacts and messages from internees.
                        </p>
                        <p>
                            Otherwise, if you're looking for stories, I would reccomend picking up a copy of <a href="https://heydaybooks.com/only-what-we-could-carry">Only What we Could Carry</a> which does an incredible job diving into the experiences of Japanese Americans within the camps.
                        </p>
                            <p>As a general source for going down specific subtopic rabbit holes, or looking up events, "<a href="https://densho.org/online-course/">Densho</a>", a Japanese term meaning ‘to pass stories to the next generation,’ or to leave a legacy, has been set up as a wonderful encyclopedia.
                    </p>
                    </div>
                    </div>

                    <div className="section fp-auto-height-responsive">
                        <div className="jheader" > Acknowledgements</div>
                        <div className="center_solo_text">
                        <p>
                                I want to thank my Grandpa, Grandma, Sam, Helen and Ted for taking the time to sit down with me in Grandpa and Grandma's home in Concord, California, to share their stories from their time in internment.
                        </p>
                            <div className="audioitem">
                                <Jplayer src='../../grandpa_license_plates.m4a' />
                            </div>
                    It was cold as fuck in Tule lake.

                        <div className="single-photo-small">

                                <img src={'../../camp_tulelake.jpg'} alt="Tule Lake Segregation Center." />
                            </div>

                        </div>
                    </div>

                    <div className="section fp-auto-height-responsive">
                        <div className="full-page-photo">
                            <img src={'../../go_for_broke_monument.jpg'} alt=" Monument in LA." />
                        </div>
                    </div>


                </div>
            )
        }}
    />
)

export default FullpageWrapper
