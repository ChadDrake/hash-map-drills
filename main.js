/* eslint-disable quotes */
const Hash = require("./hash");
const AltHash = require("./altHash");

function groupAnagrams(arr) {
  let result = new Hash();
  for (let i = 0; i < arr.length; i++) {
    let cleansed = arr[i].split("").sort().join("");
    result.set(cleansed, []);
  }
  for (let i = 0; i < arr.length; i++) {
    let cleansed = arr[i].split("").sort().join("");
    let index = result._findSlot(cleansed);
    result._hashTable[index].value.push(arr[i]);
  }
  return result;
}

function removeDuplicates(s) {
  let result = "";
  let hash = new Hash();
  for (let i = 0; i < s.length; i++) {
    hash.set(s[i], true);
  }
  for (let i = 0; i < s.length; i++) {
    if (hash.get(s[i])) {
      result = result + s[i];
      hash.set(s[i], false);
    }
  }
  return result;
}

function couldBePalindrome(s) {
  let result = 0;
  let checker = new Hash();
  for (let i = 0; i < s.length; i++) {
    checker.set(s[i], 0);
  }
  for (let i = 0; i < s.length; i++) {
    checker.set(s[i], checker.get(s[i]) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (checker.get(s[i]) !== "checked") {
      if (checker.get(s[i]) % 2 !== 0) {
        result = result + 1;
        checker.set(s[i], "checked");
      }
    }
  }
  if (result > 1) {
    return false;
  } else {
    return true;
  }
}

function main() {
  let lotr = new AltHash();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;
  lotr.set("Hobbit", "Bilbo");
  //console.log(lotr.get("Hobbit"));
  lotr.set("Hobbit", "Frodo");
  console.log(lotr.get("Hobbit"));
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfEvlen", "Arwen");
  lotr.set("Ent", "Treebeard");
  lotr.delete("Maiar");
  //console.log(lotr);
  console.log(lotr.get("Maiar"));
  // console.log(removeDuplicates("google"));
  // console.log(couldBePalindrome("daddy"));
  // console.log(
  //   groupAnagrams(["east", "cars", "acre", "arcs", "teas", "eats", "race"])
  //     ._hashTable[6].value
  // );
}
main();
