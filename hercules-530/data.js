window.H530_DATA={
 profile:{age:48,height:"6'1\"",weight:200,wake:"4:00 AM",gym:"4:30 AM",floorStop:"5:18 AM",shower:"5:30 AM",goal:"Add substantial lean muscle while keeping the bulk controlled"},
 phases:[
  {weeks:"1-2",name:"Re-entry",rule:"Use 2 working sets per exercise even when 3 are listed. Finish with 3-4 reps in reserve."},
  {weeks:"3-6",name:"Build I",rule:"Use all listed sets. Finish most sets with about 2 reps in reserve."},
  {weeks:"7",name:"Deload",rule:"Use 2 sets and about 85% of the previous week's load. Finish with 4 reps in reserve."},
  {weeks:"8-12",name:"Build II",rule:"Use all listed sets. Compounds stop at 1-2 RIR; only the last isolation set may reach about 1 RIR."}
 ],
 week:[
  {key:"monday",short:"MON",title:"Upper Body A",training:true},
  {key:"tuesday",short:"TUE",title:"Lower Body A",training:true},
  {key:"wednesday",short:"WED",title:"Recovery",training:false},
  {key:"thursday",short:"THU",title:"Push",training:true},
  {key:"friday",short:"FRI",title:"Pull",training:true},
  {key:"saturday",short:"SAT",title:"Lower Body B",training:true},
  {key:"sunday",short:"SUN",title:"Complete Rest",training:false}
 ],
 workouts:{
  monday:{title:"Upper Body A",focus:"Chest, back, shoulders and arms",blocks:[
   {type:"warmup",name:"Upper-body warm-up",seconds:300,cue:"Three minutes brisk treadmill or bike, then 10 band pull-aparts and 10 arm circles each direction."},
   {type:"exercise",name:"Machine chest press",sets:3,reps:"6-10",rest:90,cue:"Shoulder blades stay on the pad. Elbows about 30-45 degrees from your torso. No bouncing.",sub:"Dumbbell bench press"},
   {type:"exercise",name:"Chest-supported machine row",sets:3,reps:"6-10",rest:90,cue:"Keep your chest on the pad. Pull elbows back and down without shrugging.",sub:"Seated cable row"},
   {type:"exercise",name:"Incline dumbbell press",sets:2,reps:"8-12",rest:75,cue:"Use a 20-30 degree bench. Lower under control and keep wrists stacked.",sub:"Incline machine press"},
   {type:"exercise",name:"Neutral-grip lat pulldown",sets:3,reps:"8-12",rest:75,cue:"Drive elbows toward your ribs. Pull to the upper chest without leaning far back.",sub:"Assisted neutral-grip pull-up"},
   {type:"circuit",name:"Shoulders and arms circuit",rounds:2,rest:45,items:[
    {name:"Cable lateral raise",reps:"12-20 each arm",cue:"Lead with the elbow and stop around shoulder height."},
    {name:"Rope triceps pressdown",reps:"10-15",cue:"Keep upper arms pinned; separate the rope at the bottom."},
    {name:"Cable curl",reps:"10-15",cue:"Only the forearms move. No torso swing."}
   ]}
  ]},
  tuesday:{title:"Lower Body A",focus:"Quads, hamstrings, glutes, calves and trunk",blocks:[
   {type:"warmup",name:"Lower-body warm-up",seconds:300,cue:"Three minutes stationary bike, 10 bodyweight squats and 10 hip hinges."},
   {type:"exercise",name:"Leg press",sets:3,reps:"8-12",rest:120,cue:"Feet shoulder width, knees follow toes, and stop before your lower back rounds.",sub:"Hack squat"},
   {type:"exercise",name:"Romanian deadlift",sets:3,reps:"8-10",rest:120,cue:"Soft knees, hips travel back, weight stays close, spine stays neutral.",sub:"Smith-machine Romanian deadlift"},
   {type:"exercise",name:"Leg extension",sets:3,reps:"10-15",rest:60,cue:"Lift smoothly, pause briefly at the top, and never slam the stack.",sub:"Single-leg press"},
   {type:"exercise",name:"Seated leg curl",sets:3,reps:"10-15",rest:60,cue:"Keep hips against the pad and control the return.",sub:"Lying leg curl"},
   {type:"circuit",name:"Calves and core",rounds:3,rest:35,items:[
    {name:"Calf raise",reps:"12-20",cue:"Use a full stretch and pause at the top."},
    {name:"Dead bug",reps:"8 each side",cue:"Keep your lower back pressed down while opposite arm and leg extend."}
   ]}
  ]},
  thursday:{title:"Push",focus:"Chest, front and side shoulders, triceps",blocks:[
   {type:"warmup",name:"Push warm-up",seconds:300,cue:"Three minutes treadmill or bike, 10 band pull-aparts and 10 very light cable rows."},
   {type:"exercise",name:"Incline machine chest press",sets:3,reps:"8-12",rest:90,cue:"Set handles around upper-chest level and keep your shoulder blades anchored.",sub:"Low-incline dumbbell press"},
   {type:"exercise",name:"Flat machine chest press",sets:2,reps:"8-12",rest:90,cue:"Use a controlled stretch and do not violently lock the elbows.",sub:"Dumbbell bench press"},
   {type:"exercise",name:"Seated machine shoulder press",sets:3,reps:"8-12",rest:90,cue:"Keep your back supported and stop before a painful shoulder depth.",sub:"Seated dumbbell press"},
   {type:"exercise",name:"Cable fly",sets:2,reps:"12-15",rest:60,cue:"Keep a soft elbow and bring the arms together without rolling shoulders forward.",sub:"Pec deck"},
   {type:"circuit",name:"Side delts and triceps",rounds:3,rest:45,items:[
    {name:"Cable lateral raise",reps:"12-20",cue:"Raise smoothly to about shoulder height."},
    {name:"Overhead rope triceps extension",reps:"10-15",cue:"Keep upper arms steady and reach a comfortable stretch."}
   ]}
  ]},
  friday:{title:"Pull",focus:"Lats, upper back, rear delts and biceps",blocks:[
   {type:"warmup",name:"Pull warm-up",seconds:300,cue:"Three minutes treadmill or bike, 10 band pull-aparts and 10 very light pulldowns."},
   {type:"exercise",name:"Neutral-grip lat pulldown",sets:3,reps:"8-12",rest:90,cue:"Drive elbows down and avoid excessive backward lean.",sub:"Assisted neutral-grip pull-up"},
   {type:"exercise",name:"Chest-supported machine row",sets:3,reps:"8-12",rest:90,cue:"Pull with the elbows and hold the contracted position briefly.",sub:"Seated cable row"},
   {type:"exercise",name:"One-arm cable row",sets:2,reps:"10-12 each arm",rest:60,cue:"Keep the torso still and reach forward under control.",sub:"One-arm dumbbell row with chest support"},
   {type:"exercise",name:"Reverse pec deck",sets:3,reps:"12-20",rest:60,cue:"Lead with the elbows and keep shoulders away from your ears.",sub:"Cable rear-delt fly"},
   {type:"circuit",name:"Biceps superset",rounds:3,rest:45,items:[
    {name:"Incline dumbbell curl",reps:"8-12",cue:"Keep elbows behind the torso and do not swing."},
    {name:"Rope hammer curl",reps:"10-15",cue:"Use a neutral grip and keep elbows fixed."}
   ]}
  ]},
  saturday:{title:"Lower Body B",focus:"Quads, glutes, hamstrings, calves and abs",blocks:[
   {type:"warmup",name:"Lower-body warm-up",seconds:300,cue:"Three minutes stationary bike, 10 bodyweight squats and five reverse lunges per side."},
   {type:"exercise",name:"Hack squat",sets:3,reps:"8-12",rest:120,cue:"Keep heels down, knees following toes and the lower back supported.",sub:"Smith-machine squat or leg press"},
   {type:"exercise",name:"Hip thrust",sets:3,reps:"8-12",rest:90,cue:"Tuck your chin slightly and finish with the glutes, not lower-back extension.",sub:"Glute-drive machine"},
   {type:"exercise",name:"Supported Bulgarian split squat",sets:2,reps:"8-10 each leg",rest:75,cue:"Use support for balance. Keep the front heel planted and descend under control.",sub:"Single-leg press or supported reverse lunge"},
   {type:"exercise",name:"Lying leg curl",sets:3,reps:"10-15",rest:60,cue:"Keep hips down and control the lowering phase.",sub:"Seated leg curl"},
   {type:"circuit",name:"Calves and abs",rounds:3,rest:35,items:[
    {name:"Standing calf raise",reps:"12-20",cue:"Use a full stretch and pause at the top."},
    {name:"Cable crunch",reps:"10-15",cue:"Curl the rib cage toward the pelvis; do not merely hinge at the hips."}
   ]}
  ]}
 },
 meals:{
  training:{label:"Training Day",summary:"About 2,900 calories and roughly 200 g protein; adjust by weight and waist trend.",items:[
   {time:"4:00 AM",name:"Pre-workout",food:"Plain water only; no breakfast required."},
   {time:"5:40 AM",name:"Post-workout shake",food:"1 scoop Dymatize ISO100, 1 banana and 5 g creatine in water."},
   {time:"6:30 AM",name:"Breakfast",food:"2 whole eggs, 1/3 cup liquid egg whites, 60 g dry oats, 1 cup blueberries and 1 tbsp peanut butter."},
   {time:"10:00 AM",name:"Snack",food:"170 g nonfat Greek yogurt, 50 g granola and 1 tbsp honey."},
   {time:"1:00 PM",name:"Lunch",food:"4 oz cooked chicken breast, 1.5 cups cooked rice, 1 cup broccoli and 1 tbsp olive oil."},
   {time:"4:00 PM",name:"Second shake",food:"1 scoop Dymatize ISO100, 1 cup 2% milk and 1 tbsp peanut butter."},
   {time:"7:00 PM",name:"Dinner",food:"4 oz cooked 93/7 lean beef, 350 g baked potato, 1.5 cups green beans and 1 tbsp butter."}
  ]},
  rest:{label:"Rest Day",summary:"About 2,850 calories and roughly 190 g protein; use Momentous whey instead of Dymatize.",items:[
   {time:"6:00 AM",name:"First shake",food:"1 scoop Momentous Essential Whey, 1 banana and 5 g creatine."},
   {time:"7:00 AM",name:"Breakfast",food:"2 whole eggs, 1/3 cup liquid egg whites, 60 g dry oats, 1 cup blueberries and 1 tbsp peanut butter."},
   {time:"10:00 AM",name:"Snack",food:"170 g nonfat Greek yogurt, 50 g granola and 1 tbsp honey."},
   {time:"1:00 PM",name:"Lunch",food:"4 oz cooked chicken breast, 1.5 cups cooked rice, 1 cup broccoli and 1 tbsp olive oil."},
   {time:"4:00 PM",name:"Second shake",food:"1 scoop Momentous Essential Whey, 1 cup 2% milk and 1 tbsp peanut butter."},
   {time:"7:00 PM",name:"Dinner",food:"4 oz cooked 93/7 lean beef, 350 g baked potato, 1.5 cups green beans and 1 tbsp butter."}
  ]}
 },
 supplements:{
  training:[
   {time:"4:00 AM",name:"Bulk Black pre-workout",dose:"1/2 scoop in water",note:"No coffee, energy drink or other stimulant. Do not use a full scoop when combining with the separate nitric-oxide product.",risk:true},
   {time:"4:00 AM",name:"Transparent Labs Nitric Oxide",dose:"4 capsules",note:"Use only after tolerating each pre-workout product separately. Review with a pharmacist if using cardiovascular or blood-pressure medicines.",risk:true},
   {time:"4:30-5:18 AM",name:"Hydration",dose:"Plain water",note:"Sip during the workout. LMNT is not part of this plan."},
   {time:"5:40 AM",name:"Thorne creatine",dose:"5 g",note:"Mix into the Dymatize shake. Take 5 g every day."},
   {time:"First substantial meal",name:"DHEA",dose:"5 mg / 1 capsule",note:"Hormone-active. Do not increase the dose; medical review is strongly advisable, especially with testosterone, prostate concerns, heart disease or hormone-sensitive conditions.",risk:true},
   {time:"First substantial meal",name:"Basic Nutrients 2/Day",dose:"1 capsule",note:"Take with food."},
   {time:"First substantial meal",name:"Tongkat Ali 10%",dose:"100 mg / 1 capsule",note:"Morning timing is preferred. Stop for significant mood, sleep or heart-rate changes.",risk:true},
   {time:"Lunch",name:"Thorne berberine",dose:"200 mg / 1 capsule",note:"Take with food. It can affect glucose and interact with medicines.",risk:true},
   {time:"Lunch",name:"Turkesterone & ecdysterone",dose:"Bottle-label serving",note:"The earlier product schedule used four capsules; verify the current bottle before taking it."},
   {time:"Dinner",name:"Thorne berberine",dose:"200 mg / 1 capsule",note:"Second daily dose with food; stop for persistent gastrointestinal problems.",risk:true},
   {time:"Dinner",name:"Basic Nutrients 2/Day",dose:"1 capsule",note:"Completes the two-capsule daily serving."},
   {time:"Dinner",name:"Ultimate Omega 2X",dose:"2 softgels",note:"Take with food. Review if using anticoagulants or before surgery."},
   {time:"Dinner",name:"Cistanche",dose:"200 mg / 1 tablet",note:"Once daily."},
   {time:"Dinner",name:"Boron",dose:"2 mg / 1 capsule",note:"Do not add more; the multivitamin and pre-workout may already contain boron."},
   {time:"30-60 min before bed",name:"Magnesium bisglycinate",dose:"1 scoop / about 200 mg elemental",note:"Verify the bottle label and reduce or stop for diarrhea."},
   {time:"30-60 min before bed",name:"Collagen peptides",dose:"1 scoop",note:"Connective-tissue support; do not count it as complete muscle-building protein."}
  ]
 },
 safety:[
  "Stop training immediately for chest pain, faintness, severe shortness of breath, severe headache, vision change or a sustained racing or irregular heartbeat.",
  "Do not train through sharp joint pain. Use the listed substitution or end the exercise.",
  "The full supplement combination has not been proven safe as a stack. A pharmacist or clinician should review it if you use blood-pressure, heart, nitrate, erectile-dysfunction, diabetes, anticoagulant, testosterone or hormone medicines.",
  "No one-repetition maximum testing, forced repetitions or barbell deadlifts from the floor during the first 12 weeks.",
  "The pre-workout may make you feel capable of more work than your joints are ready for. Do not add sets beyond the plan."
 ],
 grocery:["14 eggs","About 2 1/3 cups liquid egg whites","420 g dry oats","7 cups blueberries","7 bananas","7 Greek-yogurt servings","350 g granola","Chicken breast for seven 4-oz cooked servings","Cooked rice for seven 1.5-cup servings","7 cups broccoli","Lean 93/7 beef for seven 4-oz cooked servings","About 2.45 kg potatoes","10.5 cups green beans","2% milk","Peanut butter","Olive oil","Butter","Dymatize ISO100 for training days","Momentous whey for Wednesday and Sunday"],
 progression:{rules:[
  "Choose a weight that lets you land near the middle of the rep range with the required reps in reserve.",
  "Keep the same load until every working set reaches the top of the rep range with clean form.",
  "Then add the smallest available increment: usually 5 lb for upper body and 5-10 lb for lower body.",
  "If you miss the minimum reps on the first set, reduce the load by about 5-10%.",
  "When the clock reaches 5:18 AM, stop. Cut the final isolation set rather than rushing compounds or shortening safety-critical rest."
 ]}
};
