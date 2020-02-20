import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import SortableTree from "react-sortable-tree";
import "./style.css";

const newData = [
    {
        uid: "group_95133",
        group_id: "95133",
        name: "Group2",
        description: "",
        group_unique_name: "Group2_fEd",
        order: 0,
        projects: [
            {
                uid: "project_1156",
                project_id: "1156",
                group_id: "95133",
                group_name: "Group2",
                project_name: "Project 2",
                project_description: "",
                project_unique_name: "Project_2_RyV",
                project_color: "6D947E",
                order: 0
            }
        ]
    },
    {
        uid: "group_95117",
        group_id: "95117",
        name: "Group One Long Name Here Goes",
        description: "",
        group_unique_name: "GROUP_1_lMS",
        order: 1,
        projects: [
            {
                uid: "project_1193",
                project_id: "1193",
                group_id: "95117",
                group_name: "Group One Long Name Here Goes",
                project_name: "Longnameprojectlongnamelong Nameproject asdasdsadasdasd",
                project_description: "",
                project_unique_name: "aztsatat_pqg",
                project_color: "1E4E80",
                order: 0
            },
            {
                uid: "project_1192",
                project_id: "1192",
                group_id: "95117",
                group_name: "Group One Long Name Here Goes",
                project_name: "asdfast",
                project_description: "",
                project_unique_name: "asdfast_ZYc",
                project_color: "AC5633",
                order: 1
            },
            {
                uid: "project_1191",
                project_id: "1191",
                group_id: "95117",
                group_name: "Group One Long Name Here Goes",
                project_name: "az",
                project_description: "",
                project_unique_name: "az_4kd",
                project_color: "6D82EA",
                order: 2
            },
            {
                uid: "project_1190",
                project_id: "1190",
                group_id: "95117",
                group_name: "Group One Long Name Here Goes",
                project_name: "assatsatast",
                project_description: "",
                project_unique_name: "assatsatast_FNG",
                project_color: "46C69D",
                order: 3
            },
            {
                uid: "project_1189",
                project_id: "1189",
                group_id: "95117",
                group_name: "Group One Long Name Here Goes",
                project_name: "sadasdasasasdsad",
                project_description: "",
                project_unique_name: "sadasdasasasdsad_nOm",
                project_color: "1E4E80",
                order: 4
            }
        ]
    }
];
const dd = newData.map((e) => {
    return {
        title: e.name,
        expanded: true,
        type: "group",
        children: e.projects.map((z) => {
            return { title: z.project_name, type: "project" };
        })
    };
});

@observer
class Comp extends Component {
    @observable data = dd;
    @observable tt = [
        { title: "Chicken", expanded: true, children: [{ title: "Egg" }] },
        { title: "Chicken", expanded: true, children: [{ title: "Egg" }] },
        { title: "Chicken", expanded: true, children: [{ title: "Egg" }] },
        { title: "Chicken", expanded: true, children: [{ title: "Egg" }] },
        { title: "Chicken", expanded: true, children: [{ title: "Egg" }] },
        { title: "Chicken", expanded: true, children: [{ title: "Egg" }] },
        { title: "Chicken", expanded: true, children: [{ title: "Egg" }] }
    ];

    render() {
        return (
            <div>
                <SortableTree
                    maxDepth={2}
                    canDrop={(e) => {
                        return (
                            (e.node.type === "project" && e.nextParent !== null) ||
                            e.node.type === "group"
                        );
                    }}
                    treeData={this.data}
                    onChange={(treeData) => {
                        this.data = treeData;
                    }}
                />
            </div>
        );
    }
}

export default Comp;
