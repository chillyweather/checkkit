const { widget } = figma;
const { useSyncedState, usePropertyMenu, useEffect, AutoLayout, Text, SVG } =
  widget;
import { empty, half, full } from "./assets/checkmark";
import checklist from "./checklists";

function PropertyMenuWidget() {
  const QA = checklist.qa;
  const ICON = checklist.icon;
  const COMPONENTCOPY = checklist.componentCopy;
  const DOCUMENTATION = checklist.documentation;
  const COMPONENTPAGE = checklist.componentPage;
  const CREATECOMPONENT = checklist.createComponent;
  const [date, setDate] = useSyncedState("date", "");
  const [name, setName] = useSyncedState("name", "");

  let today: string = getDate();

  useEffect(() => {
    figma.ui.onmessage = (msg) => {
      if (msg.type === "name") {
        const enteredName = msg.name;
        if (enteredName === "") {
          setName("");
          setDate("");
        } else {
          setName(enteredName);
          setDate(today);
        }
        figma.closePlugin();
      }
    };
  });

  // usePropertyMenu(
  //   [
  //     {
  //       itemType: "action",
  //       tooltip: "Not Checked",
  //       propertyName: "notChecked",
  //     },
  //     {
  //       itemType: "action",
  //       tooltip: "Checked",
  //       propertyName: "checked",
  //     },
  //   ],
  //   ({ propertyName }) => {
  //     if (propertyName === "checked") {
  //       setDate(today);
  //     } else if (propertyName === "notChecked") {
  //       setDate("");
  //     }
  //   }
  // );

  return (
    <AutoLayout
      direction="vertical"
      verticalAlignItems={"center"}
      fill={"#F8FAFB"}
      cornerRadius={16}
      width={580}
      padding={16}
      spacing={24}
    >
      <Text
        fontSize={40}
        fontWeight={"bold"}
        horizontalAlignText={"left"}
        width={512}
        fill={"#323232"}
      >
        QA Checklist
      </Text>
      <AutoLayout direction="vertical" spacing={16}>
        {QA!.map((item, index) => {
          return (
            <AutoLayoutWithState
              prop={item}
              key={item}
              index={index}
              date={date}
            />
          );
        })}
      </AutoLayout>
      <AutoLayout
        direction="vertical"
        onClick={() =>
          new Promise((resolve) => {
            figma.showUI(
              `
<form>
<label for="name">Your name:</label>
<input type="text" id="name" name="name">
<button type="submit">Add</button>
</form>

<style>
label {
display: block;
margin-top: 24px;
margin-bottom: 8px;
font-size: 14px;
font-family: 'Inter', sans-serif;
}

input[type="text"] {
padding: 10px;
border-radius: 5px;
border: 1px solid #ccc;
font-size: 16px;
width: 100%;
box-sizing: border-box;
margin-bottom: 12px;
}

button {
background-color: #444;
color: #fff;
border: none;
margin-top: 8px;
padding: 10px 20px;
border-radius: 40px;
font-size: 16px;
cursor: pointer;
width: 100%;
}

button:hover {
background-color: #333;
}
</style>

<script>
const form = document.querySelector('form');
const input = document.querySelector('#name');
const button = document.querySelector('button');

input.addEventListener('input', (event) => {
const enteredText = event.target.value;
});

form.addEventListener('submit', (event) => {
event.preventDefault();
const enteredText = input.value;
parent.postMessage({ pluginMessage: { type: "name", name: enteredText }}, '*')
});
</script>
          `,
              { width: 320, height: 180, title: "Checklist" }
            );
          })
        }
      >
        <Text
          fontSize={18}
          horizontalAlignText={"right"}
          width={512}
          fill={"#323232"}
        >
          Checked by: {name}
        </Text>
        <Text
          fontSize={18}
          horizontalAlignText={"right"}
          width={512}
          fill={"#323232"}
        ></Text>
        <Text
          fontSize={18}
          horizontalAlignText={"right"}
          width={512}
          fill={"#323232"}
        >
          Date: {date}
        </Text>
      </AutoLayout>
    </AutoLayout>
  );
}

function AutoLayoutWithState(props: any) {
  const index = props.index;
  const [isEmpty, setIsEmpty] = useSyncedState(`isEmpty${index}`, true);
  const [isHalf, setIsHalf] = useSyncedState(`isHalf${index}`, false);
  const [isFull, setIsFull] = useSyncedState(`isFull${index}`, false);
  const [checkMark, setCheckMark] = useSyncedState(`checkMark${index}`, empty);

  // if (isReset) {
  //   () => handleCheckMark();
  // }

  function handleCheckMark() {
    if (isEmpty) {
      setIsEmpty(false);
      setIsHalf(true);
      setCheckMark(half);
    } else if (isHalf) {
      setIsHalf(false);
      setIsFull(true);
      setCheckMark(full);
    } else {
      setIsEmpty(true);
      setIsFull(false);
      setCheckMark(empty);
    }
  }

  return (
    <AutoLayout {...props}>
      <AutoLayout verticalAlignItems="center" spacing={8}>
        <SVG src={checkMark} onClick={() => handleCheckMark()} />
        <Text
          fontSize={18}
          horizontalAlignText={"left"}
          width={512}
          fill={"#323232"}
          onClick={() => handleCheckMark()}
        >
          {props.prop}
        </Text>
      </AutoLayout>
    </AutoLayout>
  );
}

widget.register(PropertyMenuWidget);

function getDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  return dd + "." + mm + "." + yyyy;
}
