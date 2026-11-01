const medius = "Medius the Pure";
const searchCondition = "NAME == %$medius%";

"commands":[
    {
        "conditions":{
            "OR":[
                {
                    "control_self":"$searchCondition",
                    "zone":2
                },
                {
                    "control_self":"$searchCondition",
                    "zone":3
                }
            ]
        },
        "trigger_range":[20,24],
        "options":[
            "label=Special Summon 1 \"$medius\" from your GY or banishment¬search(2,255,[2,3],\"$searchCondition\")"
        ]
    }
]
