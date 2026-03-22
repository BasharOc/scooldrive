import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const reviewsContent = {
  DE: {
    header: "DAS SAGEN DEINE VORGÄNGER.",
    reviews: [
      {
        id: 1,
        name: "LUCA LANDMAN",
        timeAgo: "VOR 1 MONAT",
        text: "Ich kann diese Fahrschule nur weiterempfehlen! Die Fahrlehrer sind professionell, authentisch und freundlich, was für eine entspannte Lernatmosphäre sorgt. Ich habe mich von Anfang an gut aufgehoben gefühlt und konnte immer problemlos Termine bekommen. Insgesamt eine tolle Erfahrung. Danke an das ganze Team!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 2,
        name: "SHERIN AL FAHD",
        timeAgo: "VOR 1 MONAT",
        text: "Absolut begeistert von meiner Erfahrung! Vom ersten Tag an habe ich mich super wohl und bestens aufgehoben gefühlt. Der Fahrlehrer war top – immer unterstützend, geduldig und darauf fokussiert, dass man die Prüfung besteht. Jede Fahrstunde war lustig und ich werde sie echt vermissen!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 3,
        name: "LOUIS PAETZEL",
        timeAgo: "VOR KURZEM",
        text: "Definitiv die beste Fahrschule in Lüneburg! Heute beim ersten Mal bestanden dank der perfekten Ausbildung von Renin. Ich kam von einer anderen Fahrschule und bereue nichts. Kann jedem empfehlen, hier den Führerschein zu machen. Immer Termine und nette Ausbildung!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 4,
        name: "KARAM",
        timeAgo: "VOR KURZEM",
        text: "Sehr gute Fahrschule, Fahrstunden wurden wöchentlich gegeben. Die Fahrlehrer sind nett und üben mit den Fahrschülern die Prüfungsstrecken. Bei den Prüfungsterminen dauert es überall länger, da der TÜV Personalmangel hat.",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 5,
        name: "LINN LEMBKE",
        timeAgo: "VOR KURZEM",
        text: "Die Fahrschule ist wirklich sehr zu empfehlen! Die Theoriestunden sind interessant und die Fahrlehrer bemühen sich sehr, dass alle alles verstehen. Mein Fahrlehrer Renin war sehr geduldig und hat mir das Fahren kompetent beigebracht. Ich habe mich sicher und gut vorbereitet gefühlt.",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 6,
        name: "ANTON SIEVERS",
        timeAgo: "VOR KURZEM",
        text: "Die beste Fahrschule in Lüneburg! Ich habe meinen Führerschein in etwa 3 Monaten gemacht. Renin hat den Theorieunterricht ansprechend gestaltet. Fahrstunden hatte ich bei Harun – sehr sympathisch und hat mir das Fahren schnell beigebracht. Die Fahrlehrer sind geduldig und die Kosten fair. Vielen Dank für die gute Zeit!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 7,
        name: "JENNY S",
        timeAgo: "VOR KURZEM",
        text: "Einfach mega! Ich war super zufrieden. Der Theorieunterricht war produktiv, alles wurde ausführlich erklärt. Die Fahrstunden waren angenehm, Termine flexibel und regelmäßig. Schwierige Aufgaben wurden wiederholt, bis ich sie konnte. Dank der guten Vorbereitung habe ich die Prüfung beim ersten Mal bestanden. Danke für die tolle Ausbildung!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 8,
        name: "MOHAMMED BOZO",
        timeAgo: "VOR KURZEM",
        text: "Ich war super zufrieden. Termine bekommt man schnell und regelmäßig. Für die Praxis habe ich nur 12 Tage gebraucht und die Prüfung gleich beim ersten Mal bestanden. Vielen Dank an alle drei Fahrlehrer für die gute Ausbildung!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 9,
        name: "SUSAN SUSI",
        timeAgo: "VOR KURZEM",
        text: "Sehr zufrieden, nur zu empfehlen! Nach dem Wechsel aus einer anderen Fahrschule merkt man, wie motiviert und nett das Team ist. Mein Fahrlehrer Renin ist sehr geduldig und erklärt alles detailliert, oft mit Zeichnungen. Termine wurden immer eingehalten, auch das Büro ist super sympathisch. Es hat immer Spaß gemacht!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 10,
        name: "LENNY AMARA",
        timeAgo: "VOR KURZEM",
        text: "Beste Fahrschule in ganz Lüneburg. Sehr fair und arbeitet intensiv mit den Fahrschülern. Ich habe in kürzester Zeit meinen Führerschein bestanden – nur durch euch!",
        rating: 5,
        isHighlighted: false,
      },
    ],
  },
  EN: {
    header: "WHAT YOUR PREDECESSORS SAY.",
    reviews: [
      {
        id: 1,
        name: "LUCA LANDMAN",
        timeAgo: "1 MONTH AGO",
        text: "I can only recommend this driving school! The instructors are not only professional, but also authentic and friendly, creating a relaxed and comfortable learning atmosphere. I felt well taken care of from the beginning and always got appointments easily. Overall, a great experience. Thanks to the whole team!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 2,
        name: "SHERIN AL FAHD",
        timeAgo: "1 MONTH AGO",
        text: "Absolutely thrilled with my experience! From day one I felt very comfortable and in good hands. The instructor was fantastic – always supportive, patient, and focused on helping you pass the test. You can tell he really cares about his students’ success. Every lesson was fun and I’ll genuinely miss them!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 3,
        name: "LOUIS PAETZEL",
        timeAgo: "RECENTLY",
        text: "Definitely the best driving school in Lüneburg! Passed the test on my first try thanks to perfect instruction from Renin. I switched from another school and have no regrets. I’d recommend getting your license here to anyone – always available for lessons and a very friendly and high-quality experience!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 4,
        name: "KARAM",
        timeAgo: "RECENTLY",
        text: "Very good driving school, lessons were held weekly. The instructors are friendly and practice the exam routes with the students. Waiting times for exams are long everywhere because the testing authority is short-staffed.",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 5,
        name: "LINN LEMBKE",
        timeAgo: "RECENTLY",
        text: "This driving school is highly recommended! The theory lessons are interesting and the instructors really try to make sure everyone understands. My instructor Renin was very patient, friendly, and taught me to drive competently. I felt safe and well prepared for the test.",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 6,
        name: "ANTON SIEVERS",
        timeAgo: "RECENTLY",
        text: "The best driving school in Lüneburg! I got my license in about 3 months. Renin made the theory classes engaging. I had lessons with Harun – very friendly and taught me to drive quickly. The instructors are patient and the costs are fair. Many thanks for the great time!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 7,
        name: "JENNY S",
        timeAgo: "RECENTLY",
        text: "Simply awesome! I was very satisfied. The theory lessons were productive and everything was explained in detail. The driving lessons were pleasant, with flexible and regular appointments. Difficult tasks were repeated until I got them. Thanks to the great preparation I passed the test on my first try. Thank you for the excellent training!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 8,
        name: "MOHAMMED BOZO",
        timeAgo: "RECENTLY",
        text: "I was super satisfied. Appointments are quick and regular. I only needed 12 days for the practical part and passed the test the first time. Many thanks to all three instructors for the great training!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 9,
        name: "SUSAN SUSI",
        timeAgo: "RECENTLY",
        text: "Very satisfied, absolutely recommended! After switching from another school, you notice how motivated and friendly the team is. My instructor Renin is very patient and explains everything in detail, often with drawings. Appointments were always kept, and the office staff are also very friendly. It was always a pleasure to attend!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 10,
        name: "LENNY AMARA",
        timeAgo: "RECENTLY",
        text: "Best driving school in all of Lüneburg. Very fair and works intensively with the students. I got my license in a very short time – only because of you!",
        rating: 5,
        isHighlighted: false,
      },
    ],
  },
  AR: {
    header: "ماذا يقول الذين سبقوك.",
    reviews: [
      {
        id: 1,
        name: "لوكا لاندمن",
        timeAgo: "منذ شهر",
        text: "أنصح بهذه مدرسة القيادة بشدة! المدرسون محترفون، صادقون وودودون، مما يجعل أجواء التعلم مريحة للغاية. شعرت بالراحة من البداية وحصلت دائمًا على مواعيد بسهولة. تجربة رائعة بشكل عام. شكرًا للفريق كله!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 2,
        name: "شيرين الفهد",
        timeAgo: "منذ شهر",
        text: "كنت حقًا سعيدة بتجربتي! منذ اليوم الأول شعرت أنني في أيدٍ أمينة ومرتاحه جدًا. المدرب كان رائعًا – دائمًا داعم وصبور ومركز على نجاح الطالب في الامتحان. واضح جدًا أنه يهتم بنجاح طلابه. كل درس كان ممتعًا وسأشتاق إليها!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 3,
        name: "لويس بيتزل",
        timeAgo: "مؤخرًا",
        text: "أفضل مدرسة قيادة في لونيبورغ بلا شك! نجحت من أول مرة بفضل التدريب المثالي من رينين. انتقلت من مدرسة أخرى ولا أندم أبدًا. أوصي الجميع بالحصول على رخصتهم هنا – مواعيد دائمة وتعليم راقي وودود!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 4,
        name: "كرم",
        timeAgo: "مؤخرًا",
        text: "مدرسة قيادة ممتازة، الدروس كانت أسبوعية. المدربون ودودون ويتمرنون مع الطلاب على طرق الامتحان. مواعيد الامتحان تتأخر في كل المدارس لأن مركز الفحص يعاني من نقص في الموظفين.",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 5,
        name: "لين ليمبكه",
        timeAgo: "مؤخرًا",
        text: "مدرسة القيادة هذه ينصح بها بشدة! دروس النظري مشوقة والمدربون يبذلون جهدهم ليضمنوا أن الجميع يفهم. مدربي رينين كان صبورًا وودودًا وعلمني القيادة باحترافية. شعرت بالأمان والاستعداد الجيد للاختبار.",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 6,
        name: "أنتون زيفيرس",
        timeAgo: "مؤخرًا",
        text: "أفضل مدرسة قيادة في لونيبورغ! حصلت على الرخصة في حوالي 3 أشهر. رينين جعل دروس النظري ممتعة. أخذت دروسي العملية مع هارون – ودود جدًا وعلمني القيادة بسرعة. المدربون صبورون والتكاليف مناسبة. شكرًا لكم على الوقت الرائع!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 7,
        name: "جيني س",
        timeAgo: "مؤخرًا",
        text: "رائعة جدًا! كنت راضية جدًا. دروس النظري كانت مفيدة وكل شيء تم شرحه بالتفصيل. الدروس العملية كانت مريحة والمواعيد مرنة ومنتظمة. المهام الصعبة تكررت حتى تمكنت منها. بفضل التحضير الجيد نجحت من أول مرة. شكرًا على التدريب الممتاز!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 8,
        name: "محمد بوزو",
        timeAgo: "مؤخرًا",
        text: "كنت راضيًا جدًا. تحصل على المواعيد بسرعة وبشكل منتظم. استغرقت فقط 12 يومًا للجزء العملي ونجحت في الاختبار من أول مرة. شكرًا للمدربين الثلاثة على التدريب الجيد!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 9,
        name: "سوزان سوسي",
        timeAgo: "مؤخرًا",
        text: "راضية جدًا وأنصح بها! بعد انتقالي من مدرسة أخرى، لاحظت كم أن الفريق متحفز وودود. مدربي رينين صبور جدًا ويشرح كل شيء بالتفصيل وغالبًا مع رسومات. المواعيد كانت دائمًا دقيقة، والموظفة في المكتب لطيفة جدًا. كانت تجربة رائعة دائمًا!",
        rating: 5,
        isHighlighted: false,
      },
      {
        id: 10,
        name: "ليني أمارا",
        timeAgo: "مؤخرًا",
        text: "أفضل مدرسة قيادة في كل لونيبورغ. منصفة جدًا وتعمل بجد مع الطلاب. حصلت على رخصتي في وقت قصير جدًا – بفضلكم فقط!",
        rating: 5,
        isHighlighted: false,
      },
    ],
  },
};

const FloatingReviews = () => {
  const { selectedLanguage } = useLanguage();
  const lang = reviewsContent[selectedLanguage] || reviewsContent.DE;

  const ReviewCard = ({ review, index }) => {
    const isHighlighted = review.isHighlighted;

    return (
      <motion.div
        className={`
          ${isHighlighted ? "bg-[#F5BB00] text-black" : "bg-white text-black"} 
          rounded-3xl p-6 shadow-lg min-w-[300px] max-w-[350px] mx-4 flex-shrink-0
        `}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        {isHighlighted ? (
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{review.name}</h3>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-sm">{review.name}</h3>
                <p className="text-[#F5BB00] text-xs font-medium">
                  {review.timeAgo}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold mr-1">G</span>
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-[#F5BB00] text-sm" />
                ))}
              </div>
            </div>
            <p className="text-sm leading-relaxed">{review.text}</p>
          </>
        )}
      </motion.div>
    );
  };

  // Calculate the width of one set of reviews (including margins)
  const cardWidth = 350 + 32; // 350px card + 32px margins (16px each side)
  const totalWidth = cardWidth * lang.reviews.length;

  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 italic">
          {lang.header}
        </h2>
      </div>

      {/* Floating Reviews Container */}
      <div className="relative">
        {/* First Row - Moving Right */}
        <div className="mb-8">
          <motion.div
            className="flex"
            animate={{
              x: [0, -totalWidth],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 100, // Dauer verdoppelt (vorher 50)
                ease: "linear",
              },
            }}
            style={{
              width: `${totalWidth * 2}px`,
            }}
          >
            {/* First set of reviews */}
            {lang.reviews.map((review, index) => (
              <ReviewCard
                key={`first-${review.id}`}
                review={review}
                index={index}
              />
            ))}
            {/* Second set of reviews (seamless continuation) */}
            {lang.reviews.map((review, index) => (
              <ReviewCard
                key={`second-${review.id}`}
                review={review}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Second Row - Moving Left */}
        <div>
          <motion.div
            className="flex"
            animate={{
              x: [-totalWidth, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 110, // Dauer verdoppelt (vorher 55)
                ease: "linear",
              },
            }}
            style={{
              width: `${totalWidth * 2}px`,
            }}
          >
            {/* First set of reviews (reversed order) */}
            {lang.reviews
              .slice()
              .reverse()
              .map((review, index) => (
                <ReviewCard
                  key={`third-${review.id}`}
                  review={review}
                  index={index}
                />
              ))}
            {/* Second set of reviews (seamless continuation) */}
            {lang.reviews
              .slice()
              .reverse()
              .map((review, index) => (
                <ReviewCard
                  key={`fourth-${review.id}`}
                  review={review}
                  index={index}
                />
              ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FloatingReviews;
