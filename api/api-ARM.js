const API_BASE = "/api/v1";
const initialData = [
                {Date:"14-06-2018",country:"Russia",Opponent:"Saudi Arabia",GoalScored:"5",BallPossession:"40",attemps:"13",OnTarget:"7",OffTarget:"3",Blocked:"3",Corners:"6",Offsides:"3",FreeKicks:"11",Saves:"0",PassAccuracy:"78",Passes:"306",DistanceCovered:"118",FoulsCommitted:"22",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"12",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"14-06-2018",country:"Saudi Arabia",Opponent:"Russia",GoalScored:"0",BallPossession:"60",attemps:"6",OnTarget:"0",OffTarget:"3",Blocked:"3",Corners:"2",Offsides:"1",FreeKicks:"25",Saves:"2",PassAccuracy:"86",Passes:"511",DistanceCovered:"105",FoulsCommitted:"10",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"15-06-2018",country:"Egypt",Opponent:"Uruguay",GoalScored:"0",BallPossession:"43",attemps:"8",OnTarget:"3",OffTarget:"3",Blocked:"2",Corners:"0",Offsides:"1",FreeKicks:"7",Saves:"3",PassAccuracy:"78",Passes:"395",DistanceCovered:"112",FoulsCommitted:"12",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"15-06-2018",country:"Uruguay",Opponent:"Egypt",GoalScored:"1",BallPossession:"57",attemps:"14",OnTarget:"4",OffTarget:"6",Blocked:"4",Corners:"5",Offsides:"1",FreeKicks:"13",Saves:"3",PassAccuracy:"86",Passes:"589",DistanceCovered:"111",FoulsCommitted:"6",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"89",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"15-06-2018",country:"Morocco",Opponent:"Iran",GoalScored:"0",BallPossession:"64",attemps:"13",OnTarget:"3",OffTarget:"6",Blocked:"4",Corners:"5",Offsides:"0",FreeKicks:"14",Saves:"2",PassAccuracy:"86",Passes:"433",DistanceCovered:"101",FoulsCommitted:"22",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"1",OwngoalTime:"90"},
                {Date:"15-06-2018",country:"Iran",Opponent:"Morocco",GoalScored:"1",BallPossession:"36",attemps:"8",OnTarget:"2",OffTarget:"5",Blocked:"1",Corners:"2",Offsides:"0",FreeKicks:"22",Saves:"2",PassAccuracy:"86",Passes:"194",DistanceCovered:"100",FoulsCommitted:"14",YellowCard:"3",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"90",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"15-06-2018",country:"Portugal",Opponent:"Spain",GoalScored:"3",BallPossession:"39",attemps:"8",OnTarget:"3",OffTarget:"2",Blocked:"3",Corners:"4",Offsides:"1",FreeKicks:"13",Saves:"2",PassAccuracy:"87",Passes:"366",DistanceCovered:"102",FoulsCommitted:"12",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"4",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"15-06-2018",country:"Spain",Opponent:"Portugal",GoalScored:"3",BallPossession:"61",attemps:"12",OnTarget:"5",OffTarget:"5",Blocked:"2",Corners:"5",Offsides:"3",FreeKicks:"13",Saves:"0",PassAccuracy:"93",Passes:"727",DistanceCovered:"103",FoulsCommitted:"10",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"24",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"16-06-2018",country:"France",Opponent:"Australia",GoalScored:"2",BallPossession:"51",attemps:"12",OnTarget:"5",OffTarget:"4",Blocked:"3",Corners:"5",Offsides:"0",FreeKicks:"19",Saves:"1",PassAccuracy:"87",Passes:"484",DistanceCovered:"103",FoulsCommitted:"16",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"58",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"16-06-2018",country:"Australia",Opponent:"France",GoalScored:"1",BallPossession:"49",attemps:"4",OnTarget:"1",OffTarget:"2",Blocked:"1",Corners:"1",Offsides:"0",FreeKicks:"16",Saves:"4",PassAccuracy:"85",Passes:"390",DistanceCovered:"111",FoulsCommitted:"19",YellowCard:"3",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"62",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"1",OwngoalTime:"81"},
                {Date:"16-06-2018",country:"Argentina",Opponent:"Iceland",GoalScored:"1",BallPossession:"72",attemps:"26",OnTarget:"7",OffTarget:"9",Blocked:"10",Corners:"10",Offsides:"0",FreeKicks:"15",Saves:"2",PassAccuracy:"92",Passes:"718",DistanceCovered:"101",FoulsCommitted:"10",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"19",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"16-06-2018",country:"Iceland",Opponent:"Argentina",GoalScored:"1",BallPossession:"28",attemps:"9",OnTarget:"3",OffTarget:"5",Blocked:"1",Corners:"2",Offsides:"0",FreeKicks:"10",Saves:"7",PassAccuracy:"67",Passes:"189",DistanceCovered:"105",FoulsCommitted:"15",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"23",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"16-06-2018",country:"Peru",Opponent:"Denmark",GoalScored:"0",BallPossession:"52",attemps:"18",OnTarget:"6",OffTarget:"7",Blocked:"5",Corners:"3",Offsides:"5",FreeKicks:"21",Saves:"2",PassAccuracy:"85",Passes:"394",DistanceCovered:"104",FoulsCommitted:"10",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"16-06-2018",country:"Denmark",Opponent:"Peru",GoalScored:"1",BallPossession:"48",attemps:"10",OnTarget:"3",OffTarget:"5",Blocked:"2",Corners:"7",Offsides:"3",FreeKicks:"15",Saves:"6",PassAccuracy:"82",Passes:"342",DistanceCovered:"110",FoulsCommitted:"18",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"59",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"17-06-2018",country:"Croatia",Opponent:"Nigeria",GoalScored:"2",BallPossession:"54",attemps:"11",OnTarget:"2",OffTarget:"7",Blocked:"2",Corners:"6",Offsides:"2",FreeKicks:"17",Saves:"2",PassAccuracy:"84",Passes:"462",DistanceCovered:"104",FoulsCommitted:"20",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"32",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"17-06-2018",country:"Nigeria",Opponent:"Croatia",GoalScored:"0",BallPossession:"46",attemps:"14",OnTarget:"2",OffTarget:"5",Blocked:"7",Corners:"5",Offsides:"1",FreeKicks:"22",Saves:"1",PassAccuracy:"84",Passes:"388",DistanceCovered:"101",FoulsCommitted:"16",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:"32"},
                {Date:"17-06-2018",country:"Costa Rica",Opponent:"Serbia",GoalScored:"0",BallPossession:"50",attemps:"10",OnTarget:"3",OffTarget:"3",Blocked:"4",Corners:"5",Offsides:"1",FreeKicks:"18",Saves:"2",PassAccuracy:"83",Passes:"428",DistanceCovered:"107",FoulsCommitted:"18",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"17-06-2018",country:"Serbia",Opponent:"Costa Rica",GoalScored:"1",BallPossession:"50",attemps:"10",OnTarget:"3",OffTarget:"5",Blocked:"2",Corners:"4",Offsides:"3",FreeKicks:"19",Saves:"3",PassAccuracy:"83",Passes:"392",DistanceCovered:"109",FoulsCommitted:"15",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"56",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"17-06-2018",country:"Germany",Opponent:"Mexico",GoalScored:"0",BallPossession:"60",attemps:"25",OnTarget:"9",OffTarget:"9",Blocked:"7",Corners:"8",Offsides:"1",FreeKicks:"17",Saves:"3",PassAccuracy:"88",Passes:"595",DistanceCovered:"110",FoulsCommitted:"10",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"17-06-2018",country:"Mexico",Opponent:"Germany",GoalScored:"1",BallPossession:"40",attemps:"12",OnTarget:"4",OffTarget:"6",Blocked:"2",Corners:"1",Offsides:"2",FreeKicks:"11",Saves:"9",PassAccuracy:"82",Passes:"281",DistanceCovered:"106",FoulsCommitted:"15",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"35",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"17-06-2018",country:"Brazil",Opponent:"Switzerland",GoalScored:"1",BallPossession:"52",attemps:"20",OnTarget:"4",OffTarget:"9",Blocked:"7",Corners:"7",Offsides:"1",FreeKicks:"19",Saves:"1",PassAccuracy:"88",Passes:"521",DistanceCovered:"103",FoulsCommitted:"12",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"20",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"17-06-2018",country:"Switzerland",Opponent:"Brazil",GoalScored:"1",BallPossession:"48",attemps:"6",OnTarget:"2",OffTarget:"4",Blocked:"0",Corners:"2",Offsides:"0",FreeKicks:"13",Saves:"3",PassAccuracy:"83",Passes:"436",DistanceCovered:"108",FoulsCommitted:"19",YellowCard:"3",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"50",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"18-06-2018",country:"Sweden",Opponent:"Korea Republic",GoalScored:"1",BallPossession:"52",attemps:"15",OnTarget:"4",OffTarget:"5",Blocked:"6",Corners:"6",Offsides:"1",FreeKicks:"23",Saves:"0",PassAccuracy:"84",Passes:"417",DistanceCovered:"102",FoulsCommitted:"20",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"65",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"18-06-2018",country:"Korea Republic",Opponent:"Sweden",GoalScored:"0",BallPossession:"48",attemps:"5",OnTarget:"0",OffTarget:"2",Blocked:"3",Corners:"5",Offsides:"0",FreeKicks:"21",Saves:"3",PassAccuracy:"79",Passes:"351",DistanceCovered:"103",FoulsCommitted:"23",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"18-06-2018",country:"Belgium",Opponent:"Panama",GoalScored:"3",BallPossession:"61",attemps:"15",OnTarget:"6",OffTarget:"7",Blocked:"2",Corners:"9",Offsides:"1",FreeKicks:"21",Saves:"2",PassAccuracy:"89",Passes:"544",DistanceCovered:"102",FoulsCommitted:"17",YellowCard:"3",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"47",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"18-06-2018",country:"Panama",Opponent:"Belgium",GoalScored:"0",BallPossession:"39",attemps:"6",OnTarget:"2",OffTarget:"4",Blocked:"0",Corners:"3",Offsides:"3",FreeKicks:"18",Saves:"2",PassAccuracy:"82",Passes:"317",DistanceCovered:"100",FoulsCommitted:"18",YellowCard:"5",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"18-06-2018",country:"Tunisia",Opponent:"England",GoalScored:"1",BallPossession:"41",attemps:"6",OnTarget:"1",OffTarget:"3",Blocked:"2",Corners:"2",Offsides:"2",FreeKicks:"11",Saves:"5",PassAccuracy:"82",Passes:"326",DistanceCovered:"103",FoulsCommitted:"14",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"11",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"18-06-2018",country:"England",Opponent:"Tunisia",GoalScored:"2",BallPossession:"59",attemps:"17",OnTarget:"7",OffTarget:"7",Blocked:"3",Corners:"7",Offsides:"3",FreeKicks:"16",Saves:"0",PassAccuracy:"91",Passes:"492",DistanceCovered:"105",FoulsCommitted:"8",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"35",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"19-06-2018",country:"Colombia",Opponent:"Japan",GoalScored:"1",BallPossession:"41",attemps:"8",OnTarget:"3",OffTarget:"1",Blocked:"4",Corners:"3",Offsides:"3",FreeKicks:"10",Saves:"4",PassAccuracy:"82",Passes:"352",DistanceCovered:"93",FoulsCommitted:"15",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"39",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"19-06-2018",country:"Japan",Opponent:"Colombia",GoalScored:"2",BallPossession:"59",attemps:"14",OnTarget:"6",OffTarget:"5",Blocked:"3",Corners:"6",Offsides:"1",FreeKicks:"17",Saves:"2",PassAccuracy:"87",Passes:"565",DistanceCovered:"101",FoulsCommitted:"9",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"6",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"19-06-2018",country:"Poland",Opponent:"Senegal",GoalScored:"1",BallPossession:"57",attemps:"10",OnTarget:"4",OffTarget:"5",Blocked:"1",Corners:"3",Offsides:"3",FreeKicks:"18",Saves:"1",PassAccuracy:"88",Passes:"552",DistanceCovered:"110",FoulsCommitted:"8",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"37",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:"37"},
                {Date:"19-06-2018",country:"Senegal",Opponent:"Poland",GoalScored:"2",BallPossession:"43",attemps:"8",OnTarget:"2",OffTarget:"4",Blocked:"2",Corners:"3",Offsides:"3",FreeKicks:"11",Saves:"3",PassAccuracy:"81",Passes:"328",DistanceCovered:"107",FoulsCommitted:"15",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"60",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"19-06-2018",country:"Russia",Opponent:"Egypt",GoalScored:"3",BallPossession:"47",attemps:"11",OnTarget:"3",OffTarget:"5",Blocked:"3",Corners:"7",Offsides:"0",FreeKicks:"10",Saves:"0",PassAccuracy:"76",Passes:"380",DistanceCovered:"115",FoulsCommitted:"11",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"59",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"19-06-2018",country:"Egypt",Opponent:"Russia",GoalScored:"1",BallPossession:"53",attemps:"13",OnTarget:"1",OffTarget:"8",Blocked:"4",Corners:"4",Offsides:"0",FreeKicks:"11",Saves:"1",PassAccuracy:"81",Passes:"438",DistanceCovered:"110",FoulsCommitted:"10",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"47",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:"47"},
                {Date:"20-06-2018",country:"Portugal",Opponent:"Morocco",GoalScored:"1",BallPossession:"47",attemps:"10",OnTarget:"2",OffTarget:"4",Blocked:"4",Corners:"5",Offsides:"1",FreeKicks:"24",Saves:"4",PassAccuracy:"76",Passes:"387",DistanceCovered:"105",FoulsCommitted:"19",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"4",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"20-06-2018",country:"Morocco",Opponent:"Portugal",GoalScored:"0",BallPossession:"53",attemps:"16",OnTarget:"4",OffTarget:"10",Blocked:"2",Corners:"7",Offsides:"1",FreeKicks:"20",Saves:"1",PassAccuracy:"77",Passes:"466",DistanceCovered:"107",FoulsCommitted:"23",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"20-06-2018",country:"Uruguay",Opponent:"Saudi Arabia",GoalScored:"1",BallPossession:"47",attemps:"13",OnTarget:"4",OffTarget:"6",Blocked:"3",Corners:"3",Offsides:"1",FreeKicks:"15",Saves:"3",PassAccuracy:"88",Passes:"521",DistanceCovered:"101",FoulsCommitted:"10",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"23",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"20-06-2018",country:"Saudi Arabia",Opponent:"Uruguay",GoalScored:"0",BallPossession:"53",attemps:"8",OnTarget:"3",OffTarget:"3",Blocked:"2",Corners:"4",Offsides:"2",FreeKicks:"11",Saves:"3",PassAccuracy:"86",Passes:"590",DistanceCovered:"100",FoulsCommitted:"13",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"20-06-2018",country:"Iran",Opponent:"Spain",GoalScored:"0",BallPossession:"30",attemps:"5",OnTarget:"0",OffTarget:"5",Blocked:"0",Corners:"2",Offsides:"2",FreeKicks:"15",Saves:"2",PassAccuracy:"69",Passes:"219",DistanceCovered:"106",FoulsCommitted:"14",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"20-06-2018",country:"Spain",Opponent:"Iran",GoalScored:"1",BallPossession:"70",attemps:"17",OnTarget:"3",OffTarget:"6",Blocked:"8",Corners:"6",Offsides:"1",FreeKicks:"16",Saves:"0",PassAccuracy:"89",Passes:"805",DistanceCovered:"105",FoulsCommitted:"14",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"54",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"21-06-2018",country:"Denmark",Opponent:"Australia",GoalScored:"1",BallPossession:"49",attemps:"10",OnTarget:"5",OffTarget:"5",Blocked:"0",Corners:"3",Offsides:"1",FreeKicks:"5",Saves:"4",PassAccuracy:"88",Passes:"458",DistanceCovered:"112",FoulsCommitted:"7",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"7",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"21-06-2018",country:"Australia",Opponent:"Denmark",GoalScored:"1",BallPossession:"51",attemps:"14",OnTarget:"5",OffTarget:"5",Blocked:"4",Corners:"5",Offsides:"0",FreeKicks:"8",Saves:"5",PassAccuracy:"85",Passes:"520",DistanceCovered:"114",FoulsCommitted:"5",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"38",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"21-06-2018",country:"France",Opponent:"Peru",GoalScored:"1",BallPossession:"44",attemps:"12",OnTarget:"4",OffTarget:"6",Blocked:"2",Corners:"5",Offsides:"0",FreeKicks:"16",Saves:"2",PassAccuracy:"77",Passes:"405",DistanceCovered:"103",FoulsCommitted:"11",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"34",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"21-06-2018",country:"Peru",Opponent:"France",GoalScored:"0",BallPossession:"56",attemps:"10",OnTarget:"2",OffTarget:"6",Blocked:"2",Corners:"3",Offsides:"1",FreeKicks:"11",Saves:"3",PassAccuracy:"81",Passes:"532",DistanceCovered:"102",FoulsCommitted:"15",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"21-06-2018",country:"Argentina",Opponent:"Croatia",GoalScored:"0",BallPossession:"58",attemps:"10",OnTarget:"3",OffTarget:"3",Blocked:"4",Corners:"5",Offsides:"3",FreeKicks:"26",Saves:"2",PassAccuracy:"81",Passes:"505",DistanceCovered:"101",FoulsCommitted:"15",YellowCard:"3",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"21-06-2018",country:"Croatia",Opponent:"Argentina",GoalScored:"3",BallPossession:"42",attemps:"15",OnTarget:"5",OffTarget:"6",Blocked:"4",Corners:"2",Offsides:"3",FreeKicks:"18",Saves:"3",PassAccuracy:"80",Passes:"372",DistanceCovered:"104",FoulsCommitted:"23",YellowCard:"4",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"53",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"22-06-2018",country:"Brazil",Opponent:"Costa Rica",GoalScored:"2",BallPossession:"66",attemps:"23",OnTarget:"9",OffTarget:"9",Blocked:"5",Corners:"10",Offsides:"3",FreeKicks:"14",Saves:"0",PassAccuracy:"90",Passes:"732",DistanceCovered:"105",FoulsCommitted:"11",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"90",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"22-06-2018",country:"Costa Rica",Opponent:"Brazil",GoalScored:"0",BallPossession:"34",attemps:"4",OnTarget:"0",OffTarget:"4",Blocked:"0",Corners:"1",Offsides:"3",FreeKicks:"14",Saves:"7",PassAccuracy:"73",Passes:"271",DistanceCovered:"109",FoulsCommitted:"11",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"22-06-2018",country:"Nigeria",Opponent:"Iceland",GoalScored:"2",BallPossession:"58",attemps:"16",OnTarget:"4",OffTarget:"6",Blocked:"6",Corners:"6",Offsides:"1",FreeKicks:"10",Saves:"3",PassAccuracy:"84",Passes:"473",DistanceCovered:"100",FoulsCommitted:"9",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"49",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"22-06-2018",country:"Iceland",Opponent:"Nigeria",GoalScored:"0",BallPossession:"42",attemps:"10",OnTarget:"3",OffTarget:"6",Blocked:"1",Corners:"5",Offsides:"0",FreeKicks:"10",Saves:"2",PassAccuracy:"75",Passes:"291",DistanceCovered:"106",FoulsCommitted:"10",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"22-06-2018",country:"Serbia",Opponent:"Switzerland",GoalScored:"1",BallPossession:"42",attemps:"12",OnTarget:"3",OffTarget:"7",Blocked:"2",Corners:"3",Offsides:"0",FreeKicks:"15",Saves:"3",PassAccuracy:"78",Passes:"309",DistanceCovered:"116",FoulsCommitted:"17",YellowCard:"4",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"5",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"22-06-2018",country:"Switzerland",Opponent:"Serbia",GoalScored:"2",BallPossession:"58",attemps:"20",OnTarget:"5",OffTarget:"8",Blocked:"7",Corners:"7",Offsides:"3",FreeKicks:"17",Saves:"2",PassAccuracy:"87",Passes:"547",DistanceCovered:"112",FoulsCommitted:"12",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"52",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"23-06-2018",country:"Belgium",Opponent:"Tunisia",GoalScored:"5",BallPossession:"52",attemps:"23",OnTarget:"12",OffTarget:"8",Blocked:"3",Corners:"5",Offsides:"3",FreeKicks:"16",Saves:"3",PassAccuracy:"84",Passes:"468",DistanceCovered:"104",FoulsCommitted:"12",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"6",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"23-06-2018",country:"Tunisia",Opponent:"Belgium",GoalScored:"2",BallPossession:"48",attemps:"15",OnTarget:"5",OffTarget:"6",Blocked:"4",Corners:"2",Offsides:"3",FreeKicks:"15",Saves:"6",PassAccuracy:"82",Passes:"477",DistanceCovered:"102",FoulsCommitted:"13",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"18",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"23-06-2018",country:"Korea Republic",Opponent:"Mexico",GoalScored:"1",BallPossession:"41",attemps:"17",OnTarget:"6",OffTarget:"2",Blocked:"9",Corners:"7",Offsides:"0",FreeKicks:"7",Saves:"3",PassAccuracy:"82",Passes:"346",DistanceCovered:"99",FoulsCommitted:"24",YellowCard:"4",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"90",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"23-06-2018",country:"Mexico",Opponent:"Korea Republic",GoalScored:"2",BallPossession:"59",attemps:"13",OnTarget:"5",OffTarget:"6",Blocked:"2",Corners:"5",Offsides:"0",FreeKicks:"24",Saves:"5",PassAccuracy:"89",Passes:"485",DistanceCovered:"97",FoulsCommitted:"7",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"26",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"23-06-2018",country:"Germany",Opponent:"Sweden",GoalScored:"2",BallPossession:"71",attemps:"16",OnTarget:"5",OffTarget:"4",Blocked:"7",Corners:"8",Offsides:"5",FreeKicks:"15",Saves:"5",PassAccuracy:"91",Passes:"699",DistanceCovered:"111",FoulsCommitted:"12",YellowCard:"0",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"48",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"1",OwngoalTime:""},
                {Date:"23-06-2018",country:"Sweden",Opponent:"Germany",GoalScored:"1",BallPossession:"29",attemps:"8",OnTarget:"6",OffTarget:"1",Blocked:"1",Corners:"3",Offsides:"2",FreeKicks:"17",Saves:"4",PassAccuracy:"77",Passes:"213",DistanceCovered:"110",FoulsCommitted:"13",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"32",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"24-06-2018",country:"England",Opponent:"Panama",GoalScored:"6",BallPossession:"58",attemps:"12",OnTarget:"7",OffTarget:"3",Blocked:"2",Corners:"3",Offsides:"3",FreeKicks:"13",Saves:"1",PassAccuracy:"94",Passes:"593",DistanceCovered:"99",FoulsCommitted:"14",YellowCard:"1",Yellow_Red:"",Red:"",ManoftheMatch:"Yes",stGoal:"8",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"24-06-2018",country:"Panama",Opponent:"England",GoalScored:"1",BallPossession:"42",attemps:"8",OnTarget:"2",OffTarget:"5",Blocked:"1",Corners:"2",Offsides:"0",FreeKicks:"17",Saves:"1",PassAccuracy:"88",Passes:"398",DistanceCovered:"89",FoulsCommitted:"13",YellowCard:"3",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"78",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""},
                {Date:"24-06-2018",country:"Japan",Opponent:"Senegal",GoalScored:"2",BallPossession:"54",attemps:"7",OnTarget:"3",OffTarget:"2",Blocked:"2",Corners:"2",Offsides:"2",FreeKicks:"18",Saves:"5",PassAccuracy:"84",Passes:"449",DistanceCovered:"105",FoulsCommitted:"8",YellowCard:"2",Yellow_Red:"",Red:"",ManoftheMatch:"No",stGoal:"34",Round:"Group Stage",PSO:"No",GoalsinPSO:"0",Owngoals:"0",OwngoalTime:""}
];
module.exports = (app,db) => {

    app.get(API_BASE+"/manofthematch/loadInitialData",(req, res) =>{
        db.find({},(err,data) => {

            if(err){
                res.sendStatus(500, "Internal Error")
            }else{
                if(data.length==0){
                    db.insert(initialData)
                    res.sendStatus(200, "Ok")
                }else{
                    res.sendStatus(200, "Data is already inserted")
                }
            }
        })

    })
    app.get(API_BASE+"/manofthematch",(req,res)=>{

        db.find({},(err,data)=>{

            if(err){
                res.sendStatus(500,"Internal Error");
            }else{
                res.send(JSON.stringify(data.map((c)=>{
                    return c;
                })));  
            }
        });
    });
    app.get(API_BASE + '/manofthematch', (req, res) => {
        const query = req.query;
        const country = query.country;
    
        // Eliminar el campo 'country' de la consulta para que no interfiera
        delete query.country;
        
        // Construir la consulta para buscar solo en el país especificado
        let dbQuery = {};
        if (country) {
            dbQuery = { ...query, country: country };
        }else{
            dbQuery = { ...query };
        }
    
        // Ejecutar la consulta en la base de datos
        db.find(dbQuery, (err, data) => {
            if (err) {
                res.sendStatus(500); // Error interno del servidor
            } else {
                res.send(data); // Devolver los datos encontrados
            }
        });
    });
    //Este get nos permite filtrar por pais
    app.get(API_BASE + '/manofthematch/:country', (req, res) => {
        let country = req.params.country; 
    
        
        db.find({ country: country }, (err, data) => {
            if (err) { 
                res.sendStatus(500); 
            } else {
                if (data.length === 0) {
                    res.sendStatus(404); 
                } else {
                    res.send(data); 
                }
            }
        });
    });
    app.get(API_BASE + '/manofthematch/:attemps', (req, res) => {
        const attemps = parseInt(req.params.attemps);
        console.log(attemps);
    
        
        db.find({ attemps: parseInt(attemps) }, (err, data) => {
            if (err) {
                res.sendStatus(500); 
            } else {
                if (data.length === 0) {
                    res.sendStatus(404);
                } else {
                    res.send(data); 
                }
            }
        });
    });
    app.get(API_BASE + '/manofthematch/:country/:attemps', (req, res) => {
        const country = req.params.country;
        const attemps = parseInt(req.params.attemps);
    
        
        db.find({ country: country, attemps: parseInt(attemps) }, (err, data) => {
            if (err) {
                res.status(500).send("Error interno del servidor");
            } else {
                if (data.length === 0) {
                    res.status(404).send("No se encontraron datos para el país y el año especificados");
                } else {
                    res.send(data);
                }
            }
        });
    });
    //Paginacion 
    app.get(API_BASE + '/manofthematch', (req, res) => {
        const page = parseInt(req.query.page) || 1; // Página solicitada, por defecto 1
        const size = parseInt(req.query.size) || 10; // Tamaño de la página, por defecto 10
    
        const startIndex = (page - 1) * size; // Índice de inicio de la página
        const endIndex = page * size; // Índice de fin de la página
    
        db.find({}, (err, data) => {
            if (err) {
                res.sendStatus(500, "Internal Error");
            } else {
                const paginatedData = data.slice(startIndex, endIndex); // Obtener solo los datos de la página solicitada
                res.send(JSON.stringify(paginatedData));
            }
        });
    });
    //POST - NO PERMITIDO
    app.post(API_BASE + "/manofthematch/:id", (req, res) => {
        const id = req.params.id;
        let data = req.body;
        res.sendStatus(405, "Method Not Allowed");
    });
    //POST - NO PERMITIDO
    app.post(API_BASE + "/manofthematch/:id", (req, res) => {
        const id = req.params.id;
        let data = req.body;
        res.sendStatus(405, "Method Not Allowed");
    });

    app.post(API_BASE+'/manofthematch', (req, res) => {
        let newData = req.body; 
        const expectedFields = ["Date", "country", "Opponent", "GoalScored", "BallPossession", "attemps", "OnTarget", "OffTarget", "Blocked", "Corners", "Offsides", "FreeKicks", "Saves", "PassAccuracy", "Passes", "DistanceCovered", "FoulsCommitted", "YellowCard", "Yellow_Red", "Red", "ManoftheMatch", "stGoal", "Round", "PSO", "Goalsin", "Owngoals", "OwngoalTime"];
        const newDataFields = Object.keys(newData);
        const isValidData = expectedFields.every(field => newDataFields.includes(field));
    
        if (!isValidData) {
            
            res.sendStatus(400); 
            return;
        }
        db.findOne({ 
        Date: newData.Date,
        country: newData.country,
        Opponent: newData.Opponent,
        GoalScored: newData.GoalScored,
        BallPossession: newData.BallPossession,
        attemps: newData.attemps,
        OnTarget: newData.OnTarget,
        OffTarget: newData.OffTarget,
        Blocked: newData.Blocked,
        Corners: newData.Corners,
        Offsides: newData.Offsides,
        FreeKicks: newData.FreeKicks,
        Saves: newData.Saves,
        PassAccuracy: newData.PassAccuracy,
        Passes: newData.Passes,
        DistanceCovered: newData.DistanceCovered,
        FoulsCommitted: newData.FoulsCommitted,
        YellowCard: newData.YellowCard,
        Yellow_Red: newData.Yellow_Red,
        Red: newData.Red,
        ManoftheMatch: newData.ManoftheMatch,
        stGoal: newData.stGoal,
        Round: newData.Round,
        PSO: newData.PSO,
        GoalsinPSO: newData.GoalsinPSO,
        Owngoals: newData.Owngoals,
        OwngoalTime: newData.OwngoalTime
    },
     (err, existingData) => {
            if (err) {
               
                res.sendStatus(500); 
            } else {
                if (existingData) {
                   
                    res.sendStatus(409); 
                } else {
                    
                    db.insert(newData, (err, insertedData) => {
                        if (err) {
                            
                            res.sendStatus(500); 
                        } else {
                          
                            res.sendStatus(201); 
                        }
                    });
                }
            }
        });
    });

    //PUT - NO PERMITIDO
    app.put(API_BASE + "/manofthematch", (req, res) => {
        let data = req.body;
        res.sendStatus(405, "Method not allowed");
    });

    app.put(API_BASE+'/manofthematch/:id', (req, res) => {
        let resourceIdFromURL = req.params.id; 
        let updatedData = req.body; 
        const expectedFields = ["Date", "country", "Opponent", "GoalScored", "BallPossession", "attemps", "OnTarget", "OffTarget", "Blocked", "Corners", "Offsides", "FreeKicks", "Saves", "PassAccuracy", "Passes", "DistanceCovered", "FoulsCommitted", "YellowCard", "Yellow_Red", "Red", "ManoftheMatch", "stGoal", "Round", "PSO", "Goalsin", "Owngoals", "OwngoalTime"];
        const updatedDataFields = Object.keys(updatedData);
        const isValidData = expectedFields.every(field => updatedDataFields.includes(field));
    
        if (!isValidData) {
         
            res.sendStatus(400); 
            return;
        }
    
        if (resourceIdFromURL !== updatedData._id) {
            
            res.sendStatus(400); 
        } else {
           
            db.update({ _id: resourceIdFromURL }, updatedData, {}, (err, numReplaced) => {
                if (err) {
                    
                    res.sendStatus(500); 
                } else {
                    if (numReplaced === 0) {
                        
                        res.sendStatus(404); 
                    } else {
                        
                        res.sendStatus(200); 
                    }
                }
            });
        }
    });
    app.delete(API_BASE + "/manofthematch", (req, res) => {

        db.remove({}, { multi: true }, (err, numRemoved) => { 
            if (err) {
                res.sendStatus(500, "Internal Error"); 
                return;
            } else {
                if (numRemoved >= 1) {
                    res.sendStatus(200, "Ok"); 
                } else {
                    res.sendStatus(404, "Not found"); 
                }
            }
        });
    });
    app.delete(API_BASE+'/manofthematch/:id', (req, res) => {
        let resourceId = req.params.id; 
    
       
        db.remove({ _id: resourceId }, {}, (err, numRemoved) => {
            if (err) {
                
                res.sendStatus(500); 
            } else {
                if (numRemoved === 0) {
                    
                    res.sendStatus(404); 
                } else {
                    
                    res.sendStatus(200); 
                }
            }
        });
    });
}