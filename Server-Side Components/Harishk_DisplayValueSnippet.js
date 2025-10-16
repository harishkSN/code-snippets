// Author: Harish Kothandapani
// Purpose: Get display value of a reference field by sys_id

function getDisplayValue(table, sysId, field) {
  var gr = new GlideRecord(table);
  if (gr.get(sysId)) {
    return gr.getDisplayValue(field);
  }
  return '';
}
