import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type Hotspot = { top: string; left: string; width: string; height: string };
type StepData = {
  image: string;
  title: string;
  paragraphs: (string | React.ReactNode)[];
  hotspot?: Hotspot;
};

// ─────────────────────────────────────────────────────────────────────────────
// All 43 steps across 7 feature sections:
//   1-2   → Dashboard
//   3-10  → Score & Insights
//   11-18 → Connections (Companions & Friends)
//   19-27 → Points of Interest (POI)
//   28-30 → Trips
//   31-41 → Genix Meet
//   42-43 → Rewards
//
// Hotspot positions are % of the CROPPED phone container (phone = ~45% of PNG).
// The red border is a visual guide only — clicking anywhere on the image
// advances to the next step.
// ─────────────────────────────────────────────────────────────────────────────

const steps: StepData[] = [

  // ═══════════════════════════════ DASHBOARD ═══════════════════════════════

  {
    image: "/demo/step01.png",
    title: "Welcome to Genix Drive",
    paragraphs: [
      "Now that you're logged in, your dashboard appears.",
      "Here is your driving score to tell you how good you have been driving!",
      <>By default, a <strong>7-day</strong> filter is applied.</>,
      "Now, look at the ribbon at the top of the screen.",
      <>Tap on <strong>30 days</strong> to see the statistics for the last 30 days.</>,
    ],
    hotspot: { top: "20%", left: "38%", width: "26%", height: "5%" },
  },
  {
    image: "/demo/step02.png",
    title: "Great!",
    paragraphs: [
      <>Great! Now tap on <strong>365 days</strong> to view the data for the entire year.</>,
      "Notice how the dashboard statistics change as you select different filters.",
    ],
    hotspot: { top: "20%", left: "63%", width: "31%", height: "5%" },
  },

  // ════════════════════════════ SCORE & INSIGHTS ════════════════════════════

  {
    image: "/demo/step03.png",
    title: "INSIGHTS:",
    paragraphs: [
      "Now, click on the score displayed on the dashboard.",
      "The inner page will appear.",
    ],
    hotspot: { top: "27%", left: "13%", width: "68%", height: "37%" },
  },
  {
    image: "/demo/step04.png",
    title: "INSIGHTS:",
    paragraphs: [
      "Now, click on the score displayed on the dashboard.",
      "The inner page will appear.",
      <>Here you can also use the filter at the top to select <strong>7 days</strong>, <strong>30 days</strong>, or <strong>365 days</strong>.</>,
      "Look at the graph — it shows your score over the selected period compared to the average score of other users.",
    ],
  },
  {
    image: "/demo/step05.png",
    title: "INSIGHTS:",
    paragraphs: [
      "Now, click on the score displayed on the dashboard.",
      "The inner page will appear.",
      <>Here you can also use the filter at the top to select <strong>7 days</strong>, <strong>30 days</strong>, or <strong>365 days</strong>.</>,
      "Look at the graph — it shows your score over the selected period compared to the average score of other users.",
      <>Now, click on the <strong>first pie chart</strong> on your dashboard.</>,
    ],
    hotspot: { top: "62%", left: "7%", width: "38%", height: "14%" },
  },
  {
    image: "/demo/step06.png",
    title: "INSIGHTS:",
    paragraphs: [
      "Great! The next screen has appeared.",
      <>Now, look at the chart — it shows your driving hours divided into <strong>peak</strong>, <strong>off-peak</strong>, and <strong>night hours</strong>.</>,
      "You can select different range of days from the ribbon on top.",
    ],
  },
  {
    image: "/demo/step07.png",
    title: "INSIGHTS:",
    paragraphs: [
      "Now, go back to the previous screen.",
      <>Next, click on the <strong>stats located beside the first pie chart</strong>.</>,
      "The new screen will appear.",
    ],
    hotspot: { top: "62%", left: "40%", width: "43%", height: "14%" },
  },
  {
    image: "/demo/step08.png",
    title: "INSIGHTS:",
    paragraphs: [
      "Now, look at the graph — it shows the distance covered by a number of drivers over a selected period.",
      <>Next, at the top of the screen, select <strong>7 days</strong>, <strong>30 days</strong>, or <strong>365 days</strong> to view data for different time periods.</>,
      "Notice the peak in the graph — this shows the distance that the most drivers have covered.",
      <>The <strong>dotted line</strong> shows where you fall compared to other drivers.</>,
      <>Above the graph, you'll also see <strong>numeric values</strong> that indicate how much you have <strong>traveled vs. other users</strong>.</>,
    ],
  },
  {
    image: "/demo/step09.png",
    title: "INSIGHTS:",
    paragraphs: [
      "Now, go back to the main insight screen.",
      <>Next, click on the <strong>last pie chart</strong> on the dashboard.</>,
      "The events screen will appear.",
    ],
    hotspot: { top: "67%", left: "44%", width: "45%", height: "16%" },
  },
  {
    image: "/demo/step10.png",
    title: "INSIGHTS:",
    paragraphs: [
      <>Now, look at the chart — it shows the <strong>number of events</strong> during the period you select.</>,
      <>At the top, choose <strong>7 days</strong>, <strong>30 days</strong>, or <strong>365 days</strong> to see data for different time periods.</>,
      "The chart also compares your events with the average of other users so you can see how you're performing.",
    ],
  },

  // ══════════════════════ CONNECTIONS (COMPANIONS & FRIENDS) ═══════════════

  {
    image: "/demo/step11.png",
    title: "ADD A CONNECTION:",
    paragraphs: [
      <>The user clicks on the dashboard and then clicks on <strong>connections</strong> to add family members.</>,
    ],
    hotspot: { top: "87%", left: "62%", width: "22%", height: "8%" },
  },
  {
    image: "/demo/step12.png",
    title: "ADD A CONNECTION:",
    paragraphs: [
      <>Now, tap on the <strong>Companion tab</strong> located at the bottom of the screen.</>,
      <>A new screen will appear, displaying the <strong>list of your existing connections</strong>.</>,
    ],
    hotspot: { top: "83%", left: "9%", width: "38%", height: "7%" },
  },
  {
    image: "/demo/step13.png",
    title: "ADD A CONNECTION:",
    paragraphs: [
      <>Next, tap on <strong>"Add a Companion."</strong></>,
      "A new screen will open where you can search for a companion.",
      <><strong>Type the name</strong> in the search bar and select the desired companion from the results.</>,
    ],
  },
  {
    image: "/demo/step14.png",
    title: "ADD A CONNECTION:",
    paragraphs: [
      <>Once selected, a <strong>confirmation screen</strong> will appear.</>,
      <>Tap to <strong>send the request</strong>, and your companion request will be sent.</>,
    ],
  },
  {
    image: "/demo/step15.png",
    title: "ADD A CONNECTION:",
    paragraphs: [
      <>Now, go back to the previous screen and tap on the <strong>Friends tab</strong>.</>,
      <>The screen will display the <strong>list of your friends</strong>.</>,
    ],
    hotspot: { top: "83%", left: "49%", width: "30%", height: "7%" },
  },
  {
    image: "/demo/step16.png",
    title: "ADD A CONNECTION:",
    paragraphs: [
      <>Next, tap on <strong>"Add a Friend."</strong></>,
      "A new screen will open where you can search for a friend.",
      <><strong>Enter the name</strong> in the search bar and select the friend from the results.</>,
    ],
  },
  {
    image: "/demo/step17.png",
    title: "ADD A CONNECTION:",
    paragraphs: [
      <>Finally, a <strong>confirmation screen</strong> will appear.</>,
      <>Tap to <strong>send the request</strong>, and your friend request will be <strong>sent successfully</strong>.</>,
    ],
  },
  {
    image: "/demo/step18.png",
    title: "ADD A CONNECTION:",
    paragraphs: [
      <>Once your friend or companion accepts the request, they will appear on the <strong>Map screen</strong>.</>,
      <>You will be able to view their <strong>live location</strong> directly on the map.</>,
    ],
  },

  // ════════════════════════ POINTS OF INTEREST (POI) ═══════════════════════

  {
    image: "/demo/step19.png",
    title: "ADD A POI:",
    paragraphs: [
      <>Now, click on the top left icon on the screen to go to the menu and select the <strong>Places section</strong>.</>,
      "Next, tap on My Places — you'll see a list of all your saved locations.",
    ],
    hotspot: { top: "46%", left: "7%", width: "84%", height: "7%" },
  },
  {
    image: "/demo/step20.png",
    title: "ADD A POI:",
    paragraphs: [
      <>Now, click on the top left icon on the screen to go to the menu and select the <strong>Places section</strong>.</>,
      <>Next, tap on <strong>My Places</strong> — you'll see a list of all your saved locations.</>,
      <>Tap on any <strong>place from the list</strong>, and it will open the map view for that location, showing it with a pin icon.</>,
    ],
  },
  {
    image: "/demo/step21.png",
    title: "ADD A POI:",
    paragraphs: [
      <>From here, tap <strong>Add a Place</strong> to add a new location.</>,
      "You can search for a location and set the radius for your place.",
    ],
    hotspot: { top: "5%", left: "18%", width: "62%", height: "9%" },
  },
  {
    image: "/demo/step22.png",
    title: "ADD A POI:",
    paragraphs: [
      "After tapping Add Place from the location screen, a popup will appear asking for the details needed to create the",
      <><strong>point of interest (POI)</strong>.</>,
    ],
  },
  {
    image: "/demo/step23.png",
    title: "ADD A POI:",
    paragraphs: [
      <>First, <strong>add the companion</strong> you want associated with this POI.</>,
    ],
  },
  {
    image: "/demo/step24.png",
    title: "ADD A POI:",
    paragraphs: [
      <>First, <strong>add the companion</strong> you want associated with this POI.</>,
      <>Next, <strong>enter a name for the POI</strong> and select an icon to represent it on the map.</>,
    ],
  },
  {
    image: "/demo/step25.png",
    title: "ADD A POI:",
    paragraphs: [
      <>First, <strong>add the companion</strong> you want associated with this POI.</>,
      <>Next, <strong>enter a name for the POI</strong> and select an icon to represent it on the map.</>,
      <>Then, choose the <strong>type of activity</strong> for the POI: Exit, Enter, or Both, to monitor when your companion interacts with this location.</>,
    ],
  },
  {
    image: "/demo/step26.png",
    title: "ADD A POI:",
    paragraphs: [
      <>First, <strong>add the companion</strong> you want associated with this POI.</>,
      <>Next, <strong>enter a name for the POI</strong> and select an icon to represent it on the map.</>,
      <>Then, choose the <strong>type of activity</strong> for the POI: Exit, Enter, or Both, to monitor when your companion interacts with this location.</>,
      <>Finally, tap <strong>Confirm</strong>.</>,
    ],
  },
  {
    image: "/demo/step27.png",
    title: "ADD A POI:",
    paragraphs: [
      <>The map will display your new POI with the selected icon, showing its <strong>exact location</strong>.</>,
    ],
  },

  // ══════════════════════════════════ TRIPS ════════════════════════════════

  {
    image: "/demo/step28.png",
    title: "TRIPS",
    paragraphs: [
      <>Now return to the Dashboard and scroll down — you can view your <strong>Recent Trips</strong> section.</>,
      "Swipe right to browse through up to five recent trips.",
    ],
    hotspot: { top: "67%", left: "7%", width: "84%", height: "18%" },
  },
  {
    image: "/demo/step29.png",
    title: "TRIPS",
    paragraphs: [
      <>Here is the <strong>list of complete trips</strong> you have done in the specified date range.</>,
      "You can change the date filter here to see the trips in a specific date range.",
      "Now simply tap on the first trip to see the trip details.",
    ],
  },
  {
    image: "/demo/step30.png",
    title: "TRIPS",
    paragraphs: [
      <>The <strong>Trip Details screen</strong> will open.</>,
      "Here, you can view the trip map, total distance covered, driving score, and all the events that occurred during the trip.",
      "You can also tap on the event icons shown on the map to see the exact location where each event occurred.",
    ],
  },

  // ════════════════════════════ GENIX MEET ════════════════════════════════

  {
    image: "/demo/step31.png",
    title: "GENIX MEET",
    paragraphs: [
      "Now click on top left icon on your screen to open 'Menu'.",
      <>Now, open the <strong>Meets section</strong> from your menu.</>,
    ],
    hotspot: { top: "54%", left: "7%", width: "84%", height: "7%" },
  },
  {
    image: "/demo/step32.png",
    title: "GENIX MEET",
    paragraphs: [
      <>The first screen you see is the <strong>Upcoming Meets screen</strong>.</>,
      "Here, you can view all the meets that are scheduled in the future.",
    ],
  },
  {
    image: "/demo/step33.png",
    title: "GENIX MEET",
    paragraphs: [
      <>Next, tap on the <strong>"In Progress"</strong> tab at the top.</>,
      <>A new screen will appear, showing the <strong>list of meets</strong> that are currently in progress.</>,
      <>You can scroll through and check which meets are <strong>active</strong> at the moment.</>,
    ],
    hotspot: { top: "17%", left: "38%", width: "33%", height: "6%" },
  },
  {
    image: "/demo/step34.png",
    title: "GENIX MEET",
    paragraphs: [
      <>Then, tap on the <strong>"Completed"</strong> tab.</>,
      <>The screen will now display <strong>all the meets</strong> that have been completed.</>,
      <>You can review the details of <strong>past meets from this list</strong>.</>,
      <>This way, you can easily navigate between Upcoming, <strong>In Progress</strong>, and <strong>Completed</strong> meets to stay on top of all your activities.</>,
    ],
    hotspot: { top: "17%", left: "68%", width: "26%", height: "6%" },
  },
  {
    image: "/demo/step35.png",
    title: "GENIX MEET",
    paragraphs: [
      <>Now, tap on <strong>"Create New Meetup."</strong></>,
      <>A new screen will appear with a <strong>list of details</strong> required to set up your meetup.</>,
    ],
  },
  {
    image: "/demo/step36.png",
    title: "GENIX MEET",
    paragraphs: [
      <>Next, tap on <strong>"Select Location."</strong></>,
      "You'll be taken to a screen where you can choose the meetup location by dragging on the map to your desired spot.",
    ],
  },
  {
    image: "/demo/step37.png",
    title: "GENIX MEET",
    paragraphs: [
      <>After selecting the location, tap on <strong>"Select Participants."</strong></>,
      "A new screen will appear, showing a list of potential participants you can invite to the meetup.",
    ],
  },
  {
    image: "/demo/step38.png",
    title: "GENIX MEET",
    paragraphs: [
      <>Once you've selected the participants, tap <strong>"Send Invite."</strong></>,
      "A popup will appear confirming that the invitations have been sent, and the participants will be notified on their end.",
    ],
  },
  {
    image: "/demo/step39.png",
    title: "GENIX MEET",
    paragraphs: [
      <>Now, from the In-Progress Meets screen, tap on a meetup to open the <strong>Chat Screen</strong>.</>,
      "Here, you can message participants, share updates, or coordinate during the meetup.",
    ],
  },
  {
    image: "/demo/step40.png",
    title: "GENIX MEET",
    paragraphs: [
      <>Next, tap on the <strong>Map icon</strong>.</>,
      <>A new screen will appear showing the <strong>real-time locations</strong> of all participants on the map.</>,
      "This helps you monitor everyone's position during the meetup.",
    ],
    hotspot: { top: "13%", left: "38%", width: "22%", height: "6%" },
  },
  {
    image: "/demo/step41.png",
    title: "GENIX MEET",
    paragraphs: [
      <>Finally, tap on the <strong>Race option</strong>.</>,
      <>The Race Screen will open, displaying the positions of participants in the <strong>race or activity</strong>.</>,
      "You can see who is leading and monitor progress in real-time.",
    ],
    hotspot: { top: "13%", left: "62%", width: "24%", height: "6%" },
  },

  // ══════════════════════════════ REWARDS ══════════════════════════════════

  {
    image: "/demo/step42.png",
    title: "REWARDS",
    paragraphs: [
      <>On opening the Rewards section, the first screen displays all the <strong>Available Rewards</strong> that you can claim.</>,
      "Swipe or scroll through the list to see the variety of rewards you can earn.",
    ],
  },
  {
    image: "/demo/step43.png",
    title: "REWARDS",
    paragraphs: [
      <>Next, tap on the <strong>Purchased Rewards</strong> tab.</>,
      "This screen shows all the rewards you have already claimed or purchased, so you can keep track of your collection.",
    ],
    hotspot: { top: "17%", left: "49%", width: "38%", height: "6%" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 5 progress dots mapped to the 7 feature sections
// ─────────────────────────────────────────────────────────────────────────────
const getFilledDots = (index: number): number => {
  if (index <= 1)  return 1; // Dashboard
  if (index <= 9)  return 2; // Score & Insights
  if (index <= 17) return 3; // Connections
  if (index <= 29) return 4; // POI + Trips
  return 5;                  // Genix Meet + Rewards
};

// ─────────────────────────────────────────────────────────────────────────────

const DemoWalkthrough = () => {
  const [current, setCurrent] = useState(0);
  const total = steps.length;
  const step = steps[current];
  const filledDots = getFilledDots(current);

  const goNext = () => { if (current < total - 1) setCurrent(current + 1); };
  const goPrev = () => { if (current > 0) setCurrent(current - 1); };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Header ── */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white border-b border-gray-200">
        <Link
          to="/demo"
          className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Demo
        </Link>
        <span className="text-xs text-gray-400 font-mono tracking-wider">
          STEP {current + 1} / {total}
        </span>
      </div>

      {/* ── Main area ── */}
      <div className="flex-1 flex items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-12 w-full max-w-5xl">

          {/* ── LEFT / TOP: Phone image (cropped) ── */}
          <div
            onClick={current < total - 1 ? goNext : undefined}
            className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl mx-auto w-full select-none"
            style={{
              aspectRatio: "9 / 11",
              maxWidth: "clamp(180px, 55vw, 380px)",
              cursor: current < total - 1 ? "pointer" : "default",
            }}
            title={current < total - 1 ? "Tap anywhere to continue" : ""}
          >
            <img
              key={step.image}
              src={step.image}
              alt={`Demo step ${current + 1}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "auto",
                maxWidth: "none",
                display: "block",
                userSelect: "none",
              }}
              draggable={false}
            />

            {/* Red border — visual guide only */}
            {step.hotspot && (
              <div
                style={{
                  position: "absolute",
                  top: step.hotspot.top,
                  left: step.hotspot.left,
                  width: step.hotspot.width,
                  height: step.hotspot.height,
                  border: "2.5px solid #ef4444",
                  borderRadius: "6px",
                  pointerEvents: "none",
                }}
              />
            )}

            {/* Tap-to-continue hint */}
            {current < total - 1 && (
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/50 text-white text-[10px] sm:text-xs px-2.5 py-1 rounded-full backdrop-blur-sm pointer-events-none whitespace-nowrap">
                <ChevronRight className="w-3 h-3" />
                Tap to continue
              </div>
            )}
          </div>

          {/* ── RIGHT / BOTTOM: Instruction card ── */}
          <div
            className="rounded-xl sm:rounded-2xl p-5 sm:p-7 lg:p-9 flex flex-col gap-4 sm:gap-5 shadow-sm w-full"
            style={{ backgroundColor: "#DDD5FF" }}
          >
            {/* Progress dots */}
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((dot) => (
                <div
                  key={dot}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width:  dot <= filledDots ? "12px" : "9px",
                    height: dot <= filledDots ? "12px" : "9px",
                    backgroundColor: dot <= filledDots ? "#6d28d9" : "#c4b5fd",
                  }}
                />
              ))}
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
              {step.title}
            </h2>

            {/* Instruction paragraphs */}
            <div className="flex flex-col gap-2 sm:gap-2.5 text-gray-800 text-xs sm:text-sm lg:text-[15px] leading-relaxed">
              {step.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-2 mt-auto">
              <button
                onClick={goPrev}
                disabled={current === 0}
                className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-gray-700 text-xs sm:text-sm font-medium disabled:opacity-30 transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.55)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.85)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.55)")
                }
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              {current < total - 1 ? (
                <button
                  onClick={goNext}
                  className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-lg bg-violet-700 text-white text-xs sm:text-sm font-medium hover:bg-violet-800 transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setCurrent(0)}
                  className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-lg bg-violet-700 text-white text-xs sm:text-sm font-medium hover:bg-violet-800 transition-colors"
                >
                  Restart
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DemoWalkthrough;
