Blockly.Blocks['easykbbegin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKBbegin")
        .appendField(new Blockly.FieldTextInput("0x42"), "ADDS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['easykb_readadc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKB ReadADC")
        .appendField(new Blockly.FieldDropdown([["A0","A0"], ["A1","A1"], ["A2","A2"], ["A3","A3"], ["A4","A4"], ["A5","A5"], ["A6","A6"], ["A7","A7"], ["A8","A8"], ["A9","A9"]]), "PINADC");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['easykb_readadcmv'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKB ReadADCmV")
        .appendField(new Blockly.FieldDropdown([["A0","A0"], ["A1","A1"], ["A2","A2"], ["A3","A3"], ["A4","A4"], ["A5","A5"], ["A6","A6"], ["A7","A7"], ["A8","A8"], ["A9","A9"]]), "PINADC");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['easykb_readio'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKB DigitalRead")
        .appendField(new Blockly.FieldDropdown([["D1","D1"], ["D2","D2"], ["D3","D3"], ["D4","D4"], ["D5","D5"], ["D6","D6"]]), "PINReadIO");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['easykb_writeio'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKB DigitalWrite")
        .appendField(new Blockly.FieldDropdown([["D1","D1"], ["D2","D2"], ["D3","D3"], ["D4","D4"], ["D5","D5"], ["D6","D6"], ["DIR1","DIR1"], ["DIR2","DIR2"], ["DIR3","DIR3"], ["DIR4","DIR4"]]), "EasyKB WriteIOPIN")
        .appendField(new Blockly.FieldDropdown([["HIGH","1"], ["LOW","0"]]), "Logic");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['easykb_setuppin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKB SetuppinIO")
        .appendField(new Blockly.FieldDropdown([["D1","D1"], ["D2","D2"], ["D3","D3"], ["D4","D4"], ["D5","D5"], ["D6","D6"]]), "PINIO")
        .appendField(new Blockly.FieldDropdown([["input","DImode"], ["output","DOmode"]]), "MODE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['easykb_pwmwrite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKB PWMwrite")
        .appendField(new Blockly.FieldDropdown([["PWM1","PWM1"], ["PWM2","PWM2"], ["PWM3","PWM3"], ["PWM4","PWM4"]]), "PWMPIN");
    this.appendValueInput("EasyKB PWMwritevalue")
        .setCheck(null)
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['easykb_servowritem'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKB ServoPulse")
        .appendField(new Blockly.FieldDropdown([["Servo1","Servo1"], ["Servo2","Servo2"], ["Servo3","Servo3"]]), "PINServo");
    this.appendValueInput("EasyKB ServowriteMvalue")
        .setCheck(null)
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['easykb_motor1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKB Motor1")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "DIR");
    this.appendValueInput("EasyKB Motor1SPEED")
        .setCheck("Number")
        .appendField("SPEED%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
// Blockly.Blocks['easykb_motor1'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("EasyKB Motor1");
//         .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "DIR");
//     this.appendValueInput("EasyKB Motor1SPEED")
//         .setCheck(null)
//         .appendField("SPEED%");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };
Blockly.Blocks['easykb_motor2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKB Motor2")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "DIR");
    this.appendValueInput("EasyKB Motor2SPEED")
        .setCheck("Number")
        .appendField("SPEED%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
// Blockly.Blocks['easykb_motor2'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("EasyKB Motor2");
//     this.appendValueInput("EasyKB Motor2DIR")
//         .setCheck(null)
//         .appendField("DIR");
//     this.appendValueInput("EasyKB Motor2SPEED")
//         .setCheck(null)
//         .appendField("SPEED%");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };
Blockly.Blocks['easykb_motor3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKB Motor3")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "DIR");
    this.appendValueInput("EasyKB Motor3SPEED")
        .setCheck("Number")
        .appendField("SPEED%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
// Blockly.Blocks['easykb_motor3'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("EasyKB Motor3");
//     this.appendValueInput("EasyKB Motor3DIR")
//         .setCheck(null)
//         .appendField("DIR");
//     this.appendValueInput("EasyKB Motor3SPEED")
//         .setCheck(null)
//         .appendField("SPEED%");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };
Blockly.Blocks['easykb_motor4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("EasyKB Motor4")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "DIR");
    this.appendValueInput("EasyKB Motor4SPEED")
        .setCheck("Number")
        .appendField("SPEED%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
// Blockly.Blocks['easykb_motor4'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("EasyKB Motor4");
//     this.appendValueInput("EasyKB Motor4DIR")
//         .setCheck(null)
//         .appendField("DIR");
//     this.appendValueInput("EasyKB Motor4SPEED")
//         .setCheck(null)
//         .appendField("SPEED%");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };