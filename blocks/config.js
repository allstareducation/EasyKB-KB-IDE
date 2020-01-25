module.exports = [
    {
        name: "EasyKB",
        blocks: [
            {
                xml:
                    `<block type="easykbbegin">
                     </block>
                     <block type="easykb_readadc">
                     </block>
                     <block type="easykb_readadcmv">
                     </block>
                     <block type="easykb_readio">
                     </block>
                     <block type="easykb_writeio">
                     </block>
                     <block type="easykb_setuppin">
                     </block>
                     <block type="easykb_pwmwrite">
                        <value name="EasyKB PWMwritevalue">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                     </block>
                     <block type="easykb_servowritem">
                        <value name="EasyKB ServowriteMvalue">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                     </block>
                     <block type="easykb_motor1">
                        <value name="EasyKB Motor1SPEED">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                     </block>
                     <block type="easykb_motor2">
                        <value name="EasyKB Motor2SPEED">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                     </block>
                     <block type="easykb_motor3">
                        <value name="EasyKB Motor3SPEED">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                     </block>
                     <block type="easykb_motor4">
                        <value name="EasyKB Motor4SPEED">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                     </block>`
            }
        ]
    }
];