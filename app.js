const HEB='אבגדהוזחטיכלמנסעפצקרשת';
const OPS={rotate:'א',mirror:'ב',fold:'ג',translate:'ד',split:'ה',bridge:'ו',invert:'ז',duck:'Q'};
function glyphFor(seed){return HEB[Math.abs(seed|0)%HEB.length];}
// RESTORE_MARKER — full file follows in next commit if truncated
