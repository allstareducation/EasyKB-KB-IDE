Blockly.JavaScript['easykbbegin'] = function(block) {
  var text_adds = block.getFieldValue('ADDS');
  // TODO: Assemble JavaScript into code variable.
  var code =
      `
#EXTINC#include <Wire.h>#END
#EXTINC#include <EasyKB.h>#END

#VARIABLE
EasyKB KB1;
#END
KB1.begin(${text_adds});
\n
`;
  return code;
};

Blockly.JavaScript['easykb_readadc'] = function(block) {
  var dropdown_pinadc = block.getFieldValue('PINADC');
  // TODO: Assemble JavaScript into code variable.
  var code = `KB1.Readadc(${dropdown_pinadc})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['easykb_readadcmv'] = function(block) {
  var dropdown_pinadc = block.getFieldValue('PINADC');
  // TODO: Assemble JavaScript into code variable.
  var code = `KB1.ReadadcmV(${dropdown_pinadc})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['easykb_readio'] = function(block) {
  var dropdown_pinreadio = block.getFieldValue('PINReadIO');
  // TODO: Assemble JavaScript into code variable.
  var code = `KB1.ReadIO(${dropdown_pinreadio})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['easykb_writeio'] = function(block) {
  var dropdown_easykb_writeiopin = block.getFieldValue('EasyKB WriteIOPIN');
  var dropdown_logic = block.getFieldValue('Logic');
  // TODO: Assemble JavaScript into code variable.
  var code = `KB1.WriteIO(${dropdown_easykb_writeiopin},${dropdown_logic});\n`;
  return code;
};

Blockly.JavaScript['easykb_setuppin'] = function(block) {
  var dropdown_pinio = block.getFieldValue('PINIO');
  var dropdown_mode = block.getFieldValue('MODE');
  // TODO: Assemble JavaScript into code variable.
  var code = `KB1.setuppin(${dropdown_pinio},${dropdown_mode});\n`;
  return code;
};

Blockly.JavaScript['easykb_pwmwrite'] = function(block) {
  var dropdown_pwmpin = block.getFieldValue('PWMPIN');
  var value_easykb_pwmwritevalue = Blockly.JavaScript.valueToCode(block, 'EasyKB PWMwritevalue', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `KB1.PWMwrite(${dropdown_pwmpin},${value_easykb_pwmwritevalue});\n`;
  return code;
};

Blockly.JavaScript['easykb_servowritem'] = function(block) {
  var dropdown_pinservo = block.getFieldValue('PINServo');
  var value_easykb_servowritemvalue = Blockly.JavaScript.valueToCode(block, 'EasyKB ServowriteMvalue', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `KB1.ServowriteM(${dropdown_pinservo},${value_easykb_servowritemvalue});\n`;
  return code;
};

Blockly.JavaScript['easykb_motor1'] = function(block) {
  var dropdown_dir = block.getFieldValue('DIR');
  var value_easykb_motor1speed = Blockly.JavaScript.valueToCode(block, 'EasyKB Motor1SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var speedC = value_easykb_motor1speed*40.95;
  if(speedC>4095){
  	speedC = 4095;
  }
  var code = `KB1.Motor1(${dropdown_dir},${parseInt(speedC)});\n`;
  return code;
};

Blockly.JavaScript['easykb_motor2'] = function(block) {
  var dropdown_dir = block.getFieldValue('DIR');
  var value_easykb_motor2speed = Blockly.JavaScript.valueToCode(block, 'EasyKB Motor2SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var speedC = value_easykb_motor2speed*40.95;
  if(speedC>4095){
  	speedC = 4095;
  }
  var code = `KB1.Motor2(${dropdown_dir},${parseInt(speedC)});\n`;
  return code;
};

Blockly.JavaScript['easykb_motor3'] = function(block) {
  var dropdown_dir = block.getFieldValue('DIR');
  var value_easykb_motor3speed = Blockly.JavaScript.valueToCode(block, 'EasyKB Motor3SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var speedC = value_easykb_motor3speed*40.95;
  if(speedC>4095){
  	speedC = 4095;
  }
  var code = `KB1.Motor3(${dropdown_dir},${parseInt(speedC)});\n`;
  return code;
};

Blockly.JavaScript['easykb_motor4'] = function(block) {
  var dropdown_dir = block.getFieldValue('DIR');
  var value_easykb_motor4speed = Blockly.JavaScript.valueToCode(block, 'EasyKB Motor4SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var speedC = value_easykb_motor4speed*40.95;
  if(speedC>4095){
  	speedC = 4095;
  }
  var code = `KB1.Motor4(${dropdown_dir},${parseInt(speedC)});\n`;
  return code;
};