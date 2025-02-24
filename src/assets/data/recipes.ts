import {getCraftingTableByNameID, getItemByNameID, getSkillByNameID} from './util/data-utils';
import {IRecipe, Recipe} from '../../app/model/recipe';

export const recipesArray: IRecipe[] =
  [
    {
      'name': 'Acorn Powder',
      'nameID': 'AcornPowder',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 5,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AcornItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AcornPowderItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Adorned Ashlar Stone Bench',
      'nameID': 'AdornedAshlarStoneBench',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 7,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdornedAshlarStoneBenchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Adorned Ashlar Stone Chair',
      'nameID': 'AdornedAshlarStoneChair',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 5,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdornedAshlarStoneChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Adorned Ashlar Stone Table',
      'nameID': 'AdornedAshlarStoneTable',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 6,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 24,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdornedAshlarStoneTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Baking Upgrade',
      'nameID': 'AdvancedBakingUpgrade',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedBakingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Carpentry Table',
      'nameID': 'AdvancedCarpentryTable',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelSawBladeItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedCarpentryTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Circuit',
      'nameID': 'AdvancedCircuit',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 2,
      'labor': 85,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldFlakesItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldWiringItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SubstrateItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Combustion Engine',
      'nameID': 'AdvancedCombustionEngine',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('ServoItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('ValveItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedCombustionEngineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Cooking Upgrade',
      'nameID': 'AdvancedCookingUpgrade',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedCookingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Masonry Table',
      'nameID': 'AdvancedMasonryTable',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelSawBladeItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedMasonryTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Masonry Upgrade',
      'nameID': 'AdvancedMasonryUpgrade',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 7,
      'labor': 9000,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedMasonryUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Smelting Upgrade',
      'nameID': 'AdvancedSmeltingUpgrade',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedSmeltingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Tailoring Table',
      'nameID': 'AdvancedTailoringTable',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedTailoringTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Upgrade 1',
      'nameID': 'AdvancedUpgradeLvl1',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GeologyResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('BasicResearch'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl1Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Upgrade 2',
      'nameID': 'AdvancedUpgradeLvl2',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl1Item'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('AgricultureResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('BasicResearch'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl2Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Upgrade 3',
      'nameID': 'AdvancedUpgradeLvl3',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl2Item'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('MetallurgyResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('CulinaryResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('BasicResearch'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl3Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Advanced Upgrade 4',
      'nameID': 'AdvancedUpgradeLvl4',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl3Item'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('DendrologyResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('EngineeringResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('BasicResearch'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Agave Seed',
      'nameID': 'AgaveSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AgaveLeavesItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AgaveSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Agouti Enchiladas',
      'nameID': 'AgoutiEnchiladas',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 4,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornmealItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PrimeCutItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AgoutiEnchiladasItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Agriculture Research Paper Advanced',
      'nameID': 'AgricultureResearchPaperAdvanced',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CropSeed'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('DirtItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawFood'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AgricultureResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Agriculture Research Paper Modern',
      'nameID': 'AgricultureResearchPaperModern',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BerryExtractFertilizerItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('BloodMealFertilizerItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('HideAshFertilizerItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('PeltFertilizerItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('InkItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 20,
          'reducible': false
        },
        {
          'item': getItemByNameID('RawFood'),
          'quantity': 200,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AgricultureResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Amanita Mushroom Spores',
      'nameID': 'AmanitaMushroomSpores',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AmanitaMushroomsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AmanitaMushroomSporesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Anvil',
      'nameID': 'Anvil',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('BloomeryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AnvilItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Arrastra',
      'nameID': 'Arrastra',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MillStoneItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ArrastraItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ashlar Basalt',
      'nameID': 'AshlarBasalt',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasaltItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedBasaltItem'),
          'quantity': 2,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Ashlar Gneiss',
      'nameID': 'AshlarGneiss',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GneissItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedGneissItem'),
          'quantity': 2,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Ashlar Granite',
      'nameID': 'AshlarGranite',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GraniteItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedGraniteItem'),
          'quantity': 2,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Ashlar Large Stone Fountain',
      'nameID': 'AshlarLargeStoneFountain',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarLargeStoneFountainItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ashlar Limestone',
      'nameID': 'AshlarLimestone',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LimestoneItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedLimestoneItem'),
          'quantity': 2,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Ashlar Sandstone',
      'nameID': 'AshlarSandstone',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SandstoneItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedSandstoneItem'),
          'quantity': 2,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Ashlar Shale',
      'nameID': 'AshlarShale',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('ShaleItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedShaleItem'),
          'quantity': 2,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Ashlar Small Stone Fountain',
      'nameID': 'AshlarSmallStoneFountain',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarSmallStoneFountainItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ashlar Stone Bench',
      'nameID': 'AshlarStoneBench',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStoneBenchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ashlar Stone Chair',
      'nameID': 'AshlarStoneChair',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStoneChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ashlar Stone Door',
      'nameID': 'AshlarStoneDoor',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStoneDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ashlar Stone Fireplace',
      'nameID': 'AshlarStoneFireplace',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 6,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 24,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStoneFireplaceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ashlar Stone Table',
      'nameID': 'AshlarStoneTable',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 2,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AshlarStoneTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Asphalt Concrete',
      'nameID': 'AsphaltConcrete',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrushedRock'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AsphaltConcreteItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Assembly Line',
      'nameID': 'AssemblyLine',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('PortableSteamEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AssemblyLineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Automatic Loom',
      'nameID': 'AutomaticLoom',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AutomaticLoomItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Autumn Stew',
      'nameID': 'AutumnStew',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 2,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Greens'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PumpkinItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AutumnStewItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Agave',
      'nameID': 'BakedAgave',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AgaveLeavesItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedAgaveItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Beet',
      'nameID': 'BakedBeet',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedBeetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Corn',
      'nameID': 'BakedCorn',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedCornItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Heart Of Palm',
      'nameID': 'BakedHeartOfPalm',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HeartOfPalmItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedHeartOfPalmItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Meat',
      'nameID': 'BakedMeat',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Mortar',
      'nameID': 'BakedMortar',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodPulpItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Roast',
      'nameID': 'BakedRoast',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawRoastItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedRoastItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Taro',
      'nameID': 'BakedTaro',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedTaroItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baked Tomato',
      'nameID': 'BakedTomato',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakedTomatoItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bakery Oven',
      'nameID': 'BakeryOven',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('CookingUtensilsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakeryOvenItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Baking Upgrade',
      'nameID': 'BakingUpgrade',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BakingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bandana',
      'nameID': 'Bandana',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BandanaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Banh Xeo',
      'nameID': 'BanhXeo',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 4,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeanSproutItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrabCarcassItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Oil'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PrimeCutItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('RiceFlourItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BanhXeoItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bank',
      'nameID': 'Bank',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 2,
      'labor': 1500,
      'craftingTable': getCraftingTableByNameID('BlacksmithTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BankItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bannock',
      'nameID': 'Bannock',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('WheatItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BannockItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Barrel',
      'nameID': 'Barrel',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 1,
      'labor': 720,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BarrelItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Basic Circuit',
      'nameID': 'BasicCircuit',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldFlakesItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SubstrateItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Basic Engineering Upgrade',
      'nameID': 'BasicEngineeringUpgrade',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicEngineeringUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Basic Upgrade 1',
      'nameID': 'BasicUpgradeLvl1',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('DendrologyResearchPaperBasicItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('GeologyResearchPaperBasicItem'),
          'quantity': 3,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicUpgradeLvl1Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Basic Upgrade 2',
      'nameID': 'BasicUpgradeLvl2',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GatheringResearchPaperBasicItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('MetallurgyResearchPaperBasicItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('WoodenHullPlanksItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('BasicUpgradeLvl1Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicUpgradeLvl2Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Basic Upgrade 3',
      'nameID': 'BasicUpgradeLvl3',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CulinaryResearchPaperBasicItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('DendrologyResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('AgricultureResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('BasicUpgradeLvl2Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicUpgradeLvl3Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Basic Upgrade 4',
      'nameID': 'BasicUpgradeLvl4',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GeologyResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('EngineeringResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('BasicUpgradeLvl3Item'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('BasicResearch'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bathtub',
      'nameID': 'Bathtub',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 7,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('WhitePowderItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BathtubItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bean Paste',
      'nameID': 'BeanPaste',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BeanPasteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bean Sprout',
      'nameID': 'BeanSprout',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BeanSproutItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bear S U P R E M E',
      'nameID': 'BearSUPREME',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 6,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('InfusedOilItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MeatStockItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PrimeCutItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('VegetableMedleyItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BearSUPREMEItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bearclaw',
      'nameID': 'Bearclaw',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 2,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PastryDoughItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BearclawItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bearpack',
      'nameID': 'Bearpack',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 4,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BearpackItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Beet Campfire Salad',
      'nameID': 'BeetCampfireSalad',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fruit'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Greens'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BeetCampfireSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Beet Seed',
      'nameID': 'BeetSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BeetSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Beet Sugar',
      'nameID': 'BeetSugar',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Berry Extract Fertilizer',
      'nameID': 'BerryExtractFertilizer',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FertilizerFiller'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberryExtractItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BerryExtractFertilizerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Big Backpack',
      'nameID': 'BigBackpack',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 2,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BigBackpackItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Biodiesel',
      'nameID': 'Biodiesel',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BarrelItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('EthanolItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BiodieselItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bison Chow Fun',
      'nameID': 'BisonChowFun',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 4,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeanSproutItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('BisonCarcassItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Oil'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('RiceNoodlesItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BisonChowFunItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bison Mount',
      'nameID': 'BisonMount',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 6,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BisonCarcassItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BisonMountItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Blast Furnace',
      'nameID': 'BlastFurnace',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 5,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BlastFurnaceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Blood Meal Fertilizer',
      'nameID': 'BloodMealFertilizer',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FertilizerFiller'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BloodMealFertilizerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bloomery',
      'nameID': 'Bloomery',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedRock'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BloomeryItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Board',
      'nameID': 'Board',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Boiled Grains',
      'nameID': 'BoiledGrains',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Grain'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BoiledGrainsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Boiled Rice',
      'nameID': 'BoiledRice',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RiceItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BoiledRiceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Boiled Sausage',
      'nameID': 'BoiledSausage',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 2,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MeatStockItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawSausageItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BoiledSausageItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Boiler',
      'nameID': 'Boiler',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperPlateItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BoilerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bolete Mushroom Spores',
      'nameID': 'BoleteMushroomSpores',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoleteMushroomsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BoleteMushroomSporesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bookshelf',
      'nameID': 'Bookshelf',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 4,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 14,
          'reducible': true
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 50,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BookshelfItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Brazier',
      'nameID': 'Brazier',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('BlacksmithTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BrazierItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Bread',
      'nameID': 'Bread',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 4,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeavenedDoughItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BreadItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Brick',
      'nameID': 'Brick',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WetBrickItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Brick Fireplace',
      'nameID': 'BrickFireplace',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 4,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 50,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BrickFireplaceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Builder Boots',
      'nameID': 'BuilderBoots',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BuilderBootsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Builder Gloves',
      'nameID': 'BuilderGloves',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BuilderGlovesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Builder Helmet',
      'nameID': 'BuilderHelmet',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BuilderHelmetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Builder Overalls',
      'nameID': 'BuilderOveralls',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BuilderOverallsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Builder Shirt',
      'nameID': 'BuilderShirt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BuilderShirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Butcher Bison',
      'nameID': 'ButcherBison',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 2,
      'labor': 70,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BisonCarcassItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 10,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        },
        {
          'item': getItemByNameID('ShornWoolItem'),
          'quantity': 3,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Butcher Hare',
      'nameID': 'ButcherHare',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HareCarcassItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        },
        {
          'item': getItemByNameID('ShornWoolItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Butcher Medium Animal',
      'nameID': 'ButcherMediumAnimal',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MediumLeatherCarcass'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Butcher Medium Wooly Animal',
      'nameID': 'ButcherMediumWoolyAnimal',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MediumWoolyCarcass'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        },
        {
          'item': getItemByNameID('ShornWoolItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Butcher Small Animal',
      'nameID': 'ButcherSmallAnimal',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SmallCarcass'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Butcher Tiny Fur Animal',
      'nameID': 'ButcherTinyFurAnimal',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TinyFurCarcass'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Butcher Tiny Leather Animal',
      'nameID': 'ButcherTinyLeatherAnimal',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TinyLeatherCarcass'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Butchery Table',
      'nameID': 'ButcheryTable',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 1,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ButcheryTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Butchery Upgrade',
      'nameID': 'ButcheryUpgrade',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ButcheryUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Camas Ash Fertilizer',
      'nameID': 'CamasAshFertilizer',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharredCamasBulbItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('FertilizerFiller'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CamasAshFertilizerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Camas Bread',
      'nameID': 'CamasBread',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 5,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasPasteItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeavenedDoughItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CamasBreadItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Camas Bulb Bake',
      'nameID': 'CamasBulbBake',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CamasBulbBakeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Camas Paste',
      'nameID': 'CamasPaste',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CamasPasteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Camo Pants',
      'nameID': 'CamoPants',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 2,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CamoPantsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Camo Shirt',
      'nameID': 'CamoShirt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CamoShirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire Animal Medium',
      'nameID': 'CampfireAnimalMedium',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MediumCarcass'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredMeatItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Campfire Animal Small',
      'nameID': 'CampfireAnimalSmall',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SmallCarcass'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredMeatItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire Animal Tiny',
      'nameID': 'CampfireAnimalTiny',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TinyCarcass'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire Bison',
      'nameID': 'CampfireBison',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BisonCarcassItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredMeatItem'),
          'quantity': 8,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Campfire Cooking Upgrade',
      'nameID': 'CampfireCookingUpgrade',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CampfireCookingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire Fish Large',
      'nameID': 'CampfireFishLarge',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LargeFish'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredFishItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire Fish Medium',
      'nameID': 'CampfireFishMedium',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MediumFish'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredFishItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire Fish Small',
      'nameID': 'CampfireFishSmall',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SmallFish'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredFishItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire Pacific Sardine',
      'nameID': 'CampfirePacificSardine',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PacificSardineItem'),
          'quantity': 3,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredFishItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire Roast',
      'nameID': 'CampfireRoast',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawRoastItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CampfireRoastItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campsite',
      'nameID': 'Campsite',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 24,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CampsiteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Candle Stand',
      'nameID': 'CandleStand',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BlacksmithTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('TallowCandleItem'),
          'quantity': 3,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CandleStandItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Capris',
      'nameID': 'Capris',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CaprisItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Carpentry Advanced Upgrade',
      'nameID': 'CarpentryAdvancedUpgrade',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CarpentryAdvancedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Carpentry Basic Upgrade',
      'nameID': 'CarpentryBasicUpgrade',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CarpentryBasicUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Carved Pumpkin',
      'nameID': 'CarvedPumpkin',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PumpkinItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('TallowCandleItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CarvedPumpkinItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cast Iron Bed',
      'nameID': 'CastIronBed',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 6,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CastIronBedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cast Iron Royal Bed',
      'nameID': 'CastIronRoyalBed',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 7,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 80,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 24,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CastIronRoyalBedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cast Iron Stove',
      'nameID': 'CastIronStove',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 3,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('BloomeryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('CookingUtensilsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CastIronStoveItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ceiling Candle',
      'nameID': 'CeilingCandle',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BlacksmithTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('TallowCandleItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CeilingCandleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cellulose Fiber',
      'nameID': 'CelluloseFiber',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NaturalFiber'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cement',
      'nameID': 'Cement',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 4,
      'labor': 70,
      'craftingTable': getCraftingTableByNameID('CementKilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('QuicklimeItem'),
          'quantity': 2.5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cement Kiln',
      'nameID': 'CementKiln',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CementKilnItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Chainsaw',
      'nameID': 'Chainsaw',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 5,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ChainsawItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charcoal',
      'nameID': 'Charcoal',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 4,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 7,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharcoalItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Agave',
      'nameID': 'CharredAgave',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AgaveLeavesItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredAgaveItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Beans',
      'nameID': 'CharredBeans',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredBeansItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Beet',
      'nameID': 'CharredBeet',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredBeetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Cactus Fruit',
      'nameID': 'CharredCactusFruit',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GiantCactusFruitItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredCactusFruitItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Camas Bulb',
      'nameID': 'CharredCamasBulb',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredCamasBulbItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Corn',
      'nameID': 'CharredCorn',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredCornItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Fireweed Shoots',
      'nameID': 'CharredFireweedShoots',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FireweedShootsItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredFireweedShootsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Fish',
      'nameID': 'CharredFish',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredFishItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Heart Of Palm',
      'nameID': 'CharredHeartOfPalm',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HeartOfPalmItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredHeartOfPalmItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Meat',
      'nameID': 'CharredMeat',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Mushrooms',
      'nameID': 'CharredMushrooms',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fungus'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredMushroomsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Papaya',
      'nameID': 'CharredPapaya',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredPapayaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Pineapple',
      'nameID': 'CharredPineapple',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PineappleItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredPineappleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Sausage',
      'nameID': 'CharredSausage',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawSausageItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredSausageItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Taro',
      'nameID': 'CharredTaro',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredTaroItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Tomato',
      'nameID': 'CharredTomato',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharredTomatoItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Chef Hat',
      'nameID': 'ChefHat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ChefHatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Chef Pants',
      'nameID': 'ChefPants',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ChefPantsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Chef Shirt',
      'nameID': 'ChefShirt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ChefShirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Chef Shoes',
      'nameID': 'ChefShoes',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ChefShoesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Clam Chowder',
      'nameID': 'ClamChowder',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 5,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClamItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ClamChowderItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cloth Belt',
      'nameID': 'ClothBelt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ClothBeltItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cloth Cape',
      'nameID': 'ClothCape',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ClothCapeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Combustion Engine',
      'nameID': 'CombustionEngine',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 3,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CombustionEngineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Combustion Generator',
      'nameID': 'CombustionGenerator',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 3,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CombustionGeneratorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Composite Bow',
      'nameID': 'CompositeBow',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 6,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('FletchingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonThreadItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompositeBowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Composite Filler',
      'nameID': 'CompositeFiller',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('DirtItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('NaturalFiber'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompositeFillerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Composite Lumber',
      'nameID': 'CompositeLumber',
      'skill': getSkillByNameID('CompositesSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AdvancedCarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Composite Lumber Bench',
      'nameID': 'CompositeLumberBench',
      'skill': getSkillByNameID('CompositesSkill'),
      'level': 3,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedCarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompositeLumberBenchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Composite Lumber Chair',
      'nameID': 'CompositeLumberChair',
      'skill': getSkillByNameID('CompositesSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedCarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompositeLumberChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Composite Lumber Door',
      'nameID': 'CompositeLumberDoor',
      'skill': getSkillByNameID('CompositesSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedCarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 4,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompositeLumberDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Composite Lumber Table',
      'nameID': 'CompositeLumberTable',
      'skill': getSkillByNameID('CompositesSkill'),
      'level': 3,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedCarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompositeLumberTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Composites Upgrade',
      'nameID': 'CompositesUpgrade',
      'skill': getSkillByNameID('CompositesSkill'),
      'level': 7,
      'labor': 9000,
      'craftingTable': getCraftingTableByNameID('AdvancedCarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompositesUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Compost Fertilizer',
      'nameID': 'CompostFertilizer',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 5,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CompostItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('FertilizerFiller'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompostFertilizerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Computer Lab',
      'nameID': 'ComputerLab',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 6,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': true,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 50,
          'reducible': true
        },
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 100,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 100,
          'reducible': true
        },
        {
          'item': getItemByNameID('ReinforcedConcreteItem'),
          'quantity': 100,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ComputerLabItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Concentrate Copper Lv2',
      'nameID': 'ConcentrateCopperLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('FrothFloatationCellObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedCopperOreItem'),
          'quantity': 7,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperConcentrateItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('WetTailingsItem'),
          'quantity': 2,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Concentrate Dry Iron',
      'nameID': 'ConcentrateDryIron',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ScreeningMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedIronOreItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronConcentrateItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('TailingsItem'),
          'quantity': 1,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Concentrate Dry Iron Lv2',
      'nameID': 'ConcentrateDryIronLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 6,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('SensorBasedBeltSorterObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedIronOreItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronConcentrateItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('TailingsItem'),
          'quantity': 1,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Concentrate Gold Lv2',
      'nameID': 'ConcentrateGoldLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('FrothFloatationCellObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedGoldOreItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GoldConcentrateItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('WetTailingsItem'),
          'quantity': 3,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Concentrate Iron Lv2',
      'nameID': 'ConcentrateIronLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('FrothFloatationCellObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedIronOreItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronConcentrateItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('WetTailingsItem'),
          'quantity': 1,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Cookeina Mushroom Spores',
      'nameID': 'CookeinaMushroomSpores',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CookeinaMushroomsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CookeinaMushroomSporesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cooking Upgrade',
      'nameID': 'CookingUpgrade',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CookingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Copper Bar',
      'nameID': 'CopperBar',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperConcentrateItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClayMoldItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 1,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Copper Concentrate',
      'nameID': 'CopperConcentrate',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('RockerBoxObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedCopperOreItem'),
          'quantity': 7,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperConcentrateItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('WetTailingsItem'),
          'quantity': 3,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Copper Pipe',
      'nameID': 'CopperPipe',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperPipeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Copper Wiring',
      'nameID': 'CopperWiring',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Corn Ethanol',
      'nameID': 'CornEthanol',
      'skill': getSkillByNameID('CuttingEdgeCookingSkill'),
      'level': 0,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('EthanolItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Corn Fritters',
      'nameID': 'CornFritters',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornmealItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CornFrittersItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Corn Seed',
      'nameID': 'CornSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CornSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cornmeal',
      'nameID': 'Cornmeal',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CornmealItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CerealGermItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Corrugated Steel',
      'nameID': 'CorrugatedSteel',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CorrugatedSteelItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Corrugated Steel Door',
      'nameID': 'CorrugatedSteelDoor',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CorrugatedSteelItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CorrugatedSteelDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Corrugated Steel Fence Door',
      'nameID': 'CorrugatedSteelFenceDoor',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CorrugatedSteelItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CorrugatedSteelFenceDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cotton Carpet',
      'nameID': 'CottonCarpet',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonCarpetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cotton Curtains',
      'nameID': 'CottonCurtains',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonCurtainsItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cotton Fabric',
      'nameID': 'CottonFabric',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cotton Lint',
      'nameID': 'CottonLint',
      'skill': getSkillByNameID('GatheringSkill'),
      'level': 2,
      'labor': 35,
      'craftingTable': getCraftingTableByNameID('FiberScutchingStationObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonBollItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonLintItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 0.25,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Cotton Thread',
      'nameID': 'CottonThread',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonLintItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Couch',
      'nameID': 'Couch',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 160,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CouchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crab Pot',
      'nameID': 'CrabPot',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrabPotItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crane',
      'nameID': 'Crane',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 5,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('HeatSinkItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronAxleItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronWheelItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('PortableSteamEngineItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CraneItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crimini Mushroom Spores',
      'nameID': 'CriminiMushroomSpores',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CriminiMushroomsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CriminiMushroomSporesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crimson Salad',
      'nameID': 'CrimsonSalad',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 3,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicSaladItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredBeetItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('InfusedOilItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrimsonSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crispy Bacon',
      'nameID': 'CrispyBacon',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawBaconItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrispyBaconItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Basalt Lv2',
      'nameID': 'CrushedBasaltLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasaltItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedBasaltItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Basalt Lv3',
      'nameID': 'CrushedBasaltLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasaltItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedBasaltItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Copper Lv2',
      'nameID': 'CrushedCopperLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperOreItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedCopperOreItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedGraniteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Copper Lv3',
      'nameID': 'CrushedCopperLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperOreItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedCopperOreItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Copper Ore',
      'nameID': 'CrushedCopperOre',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 70,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperOreItem'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedCopperOreItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedGraniteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Gneiss Lv2',
      'nameID': 'CrushedGneissLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GneissItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedGneissItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Gneiss Lv3',
      'nameID': 'CrushedGneissLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GneissItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedGneissItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Gold Lv2',
      'nameID': 'CrushedGoldLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldOreItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedGoldOreItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedGraniteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Gold Lv3',
      'nameID': 'CrushedGoldLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldOreItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedGoldOreItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Gold Ore',
      'nameID': 'CrushedGoldOre',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 70,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldOreItem'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedGoldOreItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedGraniteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Granite',
      'nameID': 'CrushedGranite',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 70,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GraniteItem'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedGraniteItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Granite Lv2',
      'nameID': 'CrushedGraniteLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GraniteItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedGraniteItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Granite Lv3',
      'nameID': 'CrushedGraniteLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GraniteItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedGraniteItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Iron Lv2',
      'nameID': 'CrushedIronLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 70,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronOreItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedIronOreItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedSandstoneItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Iron Lv3',
      'nameID': 'CrushedIronLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronOreItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedIronOreItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Iron Ore',
      'nameID': 'CrushedIronOre',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronOreItem'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedIronOreItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedSandstoneItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Limestone',
      'nameID': 'CrushedLimestone',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LimestoneItem'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedLimestoneItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Limestone Lv2',
      'nameID': 'CrushedLimestoneLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 70,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LimestoneItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedLimestoneItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Limestone Lv3',
      'nameID': 'CrushedLimestoneLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LimestoneItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedLimestoneItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Mortared Stone',
      'nameID': 'CrushedMortaredStone',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 4,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedMixedRockItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Mortared Stone Lv2',
      'nameID': 'CrushedMortaredStoneLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedMixedRockItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Sandstone',
      'nameID': 'CrushedSandstone',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SandstoneItem'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedSandstoneItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Sandstone Lv2',
      'nameID': 'CrushedSandstoneLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SandstoneItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedSandstoneItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Sandstone Lv3',
      'nameID': 'CrushedSandstoneLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 70,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SandstoneItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedSandstoneItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Shale',
      'nameID': 'CrushedShale',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ShaleItem'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedShaleItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Shale Lv2',
      'nameID': 'CrushedShaleLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ShaleItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedShaleItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Shale Lv3',
      'nameID': 'CrushedShaleLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 70,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ShaleItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedShaleItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Slag Lv2',
      'nameID': 'CrushedSlagLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedSlagItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Slag Lv3',
      'nameID': 'CrushedSlagLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedSlagItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Stone Road',
      'nameID': 'CrushedStoneRoad',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 4,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('StoneRoadItem'),
          'quantity': 5,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedMixedRockItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Stone Road Lv2',
      'nameID': 'CrushedStoneRoadLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('StoneRoadItem'),
          'quantity': 5,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedMixedRockItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Culinary Research Paper Advanced',
      'nameID': 'CulinaryResearchPaperAdvanced',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BakedVegetable'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('Salad'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CulinaryResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Culinary Research Paper Advanced Meat',
      'nameID': 'CulinaryResearchPaperAdvancedMeat',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BakedMeatItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SimmeredMeatItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CulinaryResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Culinary Research Paper Basic',
      'nameID': 'CulinaryResearchPaperBasic',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CampfireSalad'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('FriedVegetable'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CulinaryResearchPaperBasicItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Culinary Research Paper Basic Fish',
      'nameID': 'CulinaryResearchPaperBasicFish',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('DriedFishItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CulinaryResearchPaperBasicItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Culinary Research Paper Basic Meat',
      'nameID': 'CulinaryResearchPaperBasicMeat',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('DriedMeatItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CulinaryResearchPaperBasicItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Culinary Research Paper Modern',
      'nameID': 'CulinaryResearchPaperModern',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 2,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoiledSausageItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('BreadItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('InkItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CulinaryResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Currency Exchange',
      'nameID': 'CurrencyExchange',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 2,
      'labor': 2500,
      'craftingTable': getCraftingTableByNameID('BlacksmithTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CurrencyExchangeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cutting Edge Cooking Upgrade',
      'nameID': 'CuttingEdgeCookingUpgrade',
      'skill': getSkillByNameID('CuttingEdgeCookingSkill'),
      'level': 7,
      'labor': 9000,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CuttingEdgeCookingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Dendrology Research Paper Advanced',
      'nameID': 'DendrologyResearchPaperAdvanced',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DendrologyResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Dendrology Research Paper Basic',
      'nameID': 'DendrologyResearchPaperBasic',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DendrologyResearchPaperBasicItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Dendrology Research Paper Modern',
      'nameID': 'DendrologyResearchPaperModern',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('InkItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DendrologyResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Derpy Hat',
      'nameID': 'DerpyHat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DerpyHatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Distribution Station',
      'nameID': 'DistributionStation',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DistributionStationItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electric Lathe',
      'nameID': 'ElectricLathe',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronWheelItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectricLatheItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electric Machinist Table',
      'nameID': 'ElectricMachinistTable',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectricMachinistTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electric Motor',
      'nameID': 'ElectricMotor',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectricMotorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electric Planer',
      'nameID': 'ElectricPlaner',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectricPlanerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electric Stamping Press',
      'nameID': 'ElectricStampingPress',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 18,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectricStampingPressItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electric Wall Lamp',
      'nameID': 'ElectricWallLamp',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectricWallLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electric Water Pump',
      'nameID': 'ElectricWaterPump',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectricWaterPumpItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electronics Assembly',
      'nameID': 'ElectronicsAssembly',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 25,
          'reducible': true
        },
        {
          'item': getItemByNameID('CorrugatedSteelItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectronicsAssemblyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Electronics Upgrade',
      'nameID': 'ElectronicsUpgrade',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 7,
      'labor': 9000,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElectronicsUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Elevator Call Post',
      'nameID': 'ElevatorCallPost',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElevatorCallPostItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Elk Mount',
      'nameID': 'ElkMount',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 4,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ElkCarcassItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElkMountItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Elk Taco',
      'nameID': 'ElkTaco',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 2,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('TortillaItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WildMixItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElkTacoItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Elk Wellington',
      'nameID': 'ElkWellington',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 6,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeavenedDoughItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PrimeCutItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ElkWellingtonItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Engineering Research Paper Advanced',
      'nameID': 'EngineeringResearchPaperAdvanced',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WaterwheelItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WindmillItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('EngineeringResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Engineering Research Paper Modern',
      'nameID': 'EngineeringResearchPaperModern',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronAxleItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('InkItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('EngineeringResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Epoxy',
      'nameID': 'Epoxy',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PetroleumItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('BarrelItem'),
          'quantity': 3,
          'reducible': true,
          'primary': false
        },
        {
          'item': getItemByNameID('SulfurItem'),
          'quantity': 1,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Excavator',
      'nameID': 'Excavator',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 2,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedCombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('RubberWheelItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelSpringItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ExcavatorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Exotic Fruit Salad',
      'nameID': 'ExoticFruitSalad',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PricklyPearFruitItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('PumpkinItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FruitSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Exotic Salad',
      'nameID': 'ExoticSalad',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CriminiMushroomsItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PricklyPearFruitItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('RiceItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Exotic Vegetable Medley',
      'nameID': 'ExoticVegetableMedley',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('VegetableMedleyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Explorer Boots',
      'nameID': 'ExplorerBoots',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ExplorerBootsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Explorer Gloves',
      'nameID': 'ExplorerGloves',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ExplorerGlovesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Explorer Hat',
      'nameID': 'ExplorerHat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ExplorerHatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Explorer Pants',
      'nameID': 'ExplorerPants',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ExplorerPantsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Explorer Shirt',
      'nameID': 'ExplorerShirt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ExplorerShirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fantastic Forest Pizza',
      'nameID': 'FantasticForestPizza',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 3,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Greens'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeavenedDoughItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FantasticForestPizzaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Farmer Boots',
      'nameID': 'FarmerBoots',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FarmerBootsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Farmer Gloves',
      'nameID': 'FarmerGloves',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FarmerGlovesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Farmer Hat',
      'nameID': 'FarmerHat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 60,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FarmerHatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Farmer Overalls',
      'nameID': 'FarmerOveralls',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FarmerOverallsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Farmer Shirt',
      'nameID': 'FarmerShirt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoolFabricItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FarmerShirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Farmers Table',
      'nameID': 'FarmersTable',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 1,
      'labor': 200,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('DirtItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FarmersTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Farming Upgrade',
      'nameID': 'FarmingUpgrade',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FarmingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fern Campfire Salad',
      'nameID': 'FernCampfireSalad',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiddleheadsItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Vegetable'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FernCampfireSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fern Spore',
      'nameID': 'FernSpore',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiddleheadsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FernSporeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fertilizers Upgrade',
      'nameID': 'FertilizersUpgrade',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FertilizersUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fiber Filler',
      'nameID': 'FiberFiller',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('DirtItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FiberFillerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fiberglass',
      'nameID': 'Fiberglass',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Field Campfire Stew',
      'nameID': 'FieldCampfireStew',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 4,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FieldCampfireStewItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fireweed Seed',
      'nameID': 'FireweedSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FireweedShootsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FireweedSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish N Chips',
      'nameID': 'FishNChips',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Oil'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('TaroFriesItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FishNChipsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish Stew',
      'nameID': 'FishStew',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharredFishItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MeatyStewItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish Trap',
      'nameID': 'FishTrap',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FishTrapItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fishery',
      'nameID': 'Fishery',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 1,
      'labor': 200,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FisheryItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Flat Steel',
      'nameID': 'FlatSteel',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FlatSteelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Flat Steel Door',
      'nameID': 'FlatSteelDoor',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 5,
      'labor': 115,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlatSteelItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FlatSteelDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Flatbread',
      'nameID': 'Flatbread',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FlatbreadItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Flour',
      'nameID': 'Flour',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WheatItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CerealGermItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Forest Salad',
      'nameID': 'ForestSalad',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('FiddleheadsItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Framed Glass',
      'nameID': 'FramedGlass',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FramedGlassItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Framed Glass Door',
      'nameID': 'FramedGlassDoor',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 5,
      'labor': 115,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FramedGlassItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FramedGlassDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fried Camas',
      'nameID': 'FriedCamas',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FriedCamasItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fried Fiddleheads',
      'nameID': 'FriedFiddleheads',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('FiddleheadsItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FriedFiddleheadsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fried Hare Haunches',
      'nameID': 'FriedHareHaunches',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 2,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('Oil'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PreparedMeatItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FriedHareHaunchesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fried Hearts Of Palm',
      'nameID': 'FriedHeartsOfPalm',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('HeartOfPalmItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FriedHeartsOfPalmItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fried Taro',
      'nameID': 'FriedTaro',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FriedTaroItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fried Tomatoes',
      'nameID': 'FriedTomatoes',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FriedTomatoesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Froth Floatation Cell',
      'nameID': 'FrothFloatationCell',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('ElectricMotorItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelPipeItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FrothFloatationCellItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fruit Muffin',
      'nameID': 'FruitMuffin',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 2,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fruit'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FruitMuffinItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fruit Tart',
      'nameID': 'FruitTart',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fruit'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PastryDoughItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FruitTartItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Garden Boots',
      'nameID': 'GardenBoots',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GardenBootsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Gasoline',
      'nameID': 'Gasoline',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PetroleumItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GasolineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('SulfurItem'),
          'quantity': 1,
          'reducible': true,
          'primary': true
        }
      ]
    },
    {
      'name': 'Gathering Research Paper Basic',
      'nameID': 'GatheringResearchPaperBasic',
      'skill': getSkillByNameID('GatheringSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawFood'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GatheringResearchPaperBasicItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Gearbox',
      'nameID': 'Gearbox',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('ShaperObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Geology Research Paper Advanced',
      'nameID': 'GeologyResearchPaperAdvanced',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GeologyResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Geology Research Paper Basic',
      'nameID': 'GeologyResearchPaperBasic',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Rock'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GeologyResearchPaperBasicItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Geology Research Paper Modern',
      'nameID': 'GeologyResearchPaperModern',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('InkItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GeologyResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Gigot Sleeve Shirt',
      'nameID': 'GigotSleeveShirt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GigotSleeveShirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Glass',
      'nameID': 'Glass',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedLimestoneItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Glassworking Advanced Upgrade',
      'nameID': 'GlassworkingAdvancedUpgrade',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GlassworkingAdvancedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Glassworking Modern Upgrade',
      'nameID': 'GlassworkingModernUpgrade',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GlassworkingModernUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Glassworks',
      'nameID': 'Glassworks',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 1,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GlassworksItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Goat Mount',
      'nameID': 'GoatMount',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 4,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('MountainGoatCarcassItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GoatMountItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Gold Bar',
      'nameID': 'GoldBar',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 4,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldConcentrateItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClayMoldItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 1,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Gold Concentrate',
      'nameID': 'GoldConcentrate',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('RockerBoxObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedGoldOreItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GoldConcentrateItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('WetTailingsItem'),
          'quantity': 4,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Gold Flakes',
      'nameID': 'GoldFlakes',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 75,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GoldFlakesItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Gold Wiring',
      'nameID': 'GoldWiring',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GoldWiringItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Grassland Salad',
      'nameID': 'GrasslandSalad',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hand Plow',
      'nameID': 'HandPlow',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 2,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodenWheelItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HandPlowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hanging Long Steel Sign',
      'nameID': 'HangingLongSteelSign',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HangingLongSteelSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hanging Steel Framed Sign',
      'nameID': 'HangingSteelFramedSign',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HangingSteelFramedSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hanging Steel Mine Sign',
      'nameID': 'HangingSteelMineSign',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HangingSteelMineSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hanging Steel Plain Sign',
      'nameID': 'HangingSteelPlainSign',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HangingSteelPlainSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hanging Steel Shop Sign',
      'nameID': 'HangingSteelShopSign',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HangingSteelShopSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hearty Hometown Pizza',
      'nameID': 'HeartyHometownPizza',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CriminiMushroomsItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeavenedDoughItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawSausageItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HeartyHometownPizzaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Heat Sink',
      'nameID': 'HeatSink',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ShaperObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperPlateItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HeatSinkItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Henley',
      'nameID': 'Henley',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HenleyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hewn Bench',
      'nameID': 'HewnBench',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 18,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HewnBenchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hewn Chair',
      'nameID': 'HewnChair',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HewnChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hewn Door',
      'nameID': 'HewnDoor',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HewnDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hewn Dresser',
      'nameID': 'HewnDresser',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 18,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HewnDresserItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hewn Nightstand',
      'nameID': 'HewnNightstand',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 4,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 14,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HewnNightstandItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hewn Table',
      'nameID': 'HewnTable',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HewnTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hide Ash Fertilizer',
      'nameID': 'HideAshFertilizer',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FertilizerFiller'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HideAshFertilizerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hosomaki',
      'nameID': 'Hosomaki',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 3,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoiledRiceItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('KelpItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HosomakiItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Huckleberry Extract',
      'nameID': 'HuckleberryExtract',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HuckleberryExtractItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Huckleberry Fritter',
      'nameID': 'HuckleberryFritter',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 5,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberryExtractItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Oil'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PastryDoughItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HuckleberryFritterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Huckleberry Pie',
      'nameID': 'HuckleberryPie',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 5,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HuckleberryPieItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Huckleberry Seed',
      'nameID': 'HuckleberrySeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HuckleberrySeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Icebox',
      'nameID': 'Icebox',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IceboxItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Industrial Elevator',
      'nameID': 'IndustrialElevator',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 2,
      'labor': 2500,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('ElectricMotorItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('FlatSteelItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelGearboxItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IndustrialElevatorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Industrial Refrigerator',
      'nameID': 'IndustrialRefrigerator',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 6,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 32,
          'reducible': true
        },
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IndustrialRefrigeratorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Industry Upgrade',
      'nameID': 'IndustryUpgrade',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 7,
      'labor': 9000,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IndustryUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Infused Oil',
      'nameID': 'InfusedOil',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberryExtractItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Oil'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('InfusedOilItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Axe',
      'nameID': 'IronAxe',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('GrindstoneObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronAxeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Axle',
      'nameID': 'IronAxle',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 75,
      'craftingTable': getCraftingTableByNameID('LatheObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronAxleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Bar',
      'nameID': 'IronBar',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronConcentrateItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClayMoldItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 1,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Iron Concentrate',
      'nameID': 'IronConcentrate',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('RockerBoxObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedIronOreItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronConcentrateItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('WetTailingsItem'),
          'quantity': 2,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Iron Gear',
      'nameID': 'IronGear',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 75,
      'craftingTable': getCraftingTableByNameID('ShaperObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Hammer',
      'nameID': 'IronHammer',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('GrindstoneObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronHammerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Hoe',
      'nameID': 'IronHoe',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('GrindstoneObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronHoeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Machete',
      'nameID': 'IronMachete',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('GrindstoneObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronMacheteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Pickaxe',
      'nameID': 'IronPickaxe',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('GrindstoneObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronPickaxeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Pipe',
      'nameID': 'IronPipe',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Plate',
      'nameID': 'IronPlate',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ScrewPressObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Rock Drill',
      'nameID': 'IronRockDrill',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('GrindstoneObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronRockDrillItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Saw Blade',
      'nameID': 'IronSawBlade',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronSawBladeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Shovel',
      'nameID': 'IronShovel',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('GrindstoneObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronShovelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Sickle',
      'nameID': 'IronSickle',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 1,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('GrindstoneObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronSickleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Wheel',
      'nameID': 'IronWheel',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 3,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronWheelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Jaw Crusher',
      'nameID': 'JawCrusher',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 2,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ElectricMotorItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 25,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelGearItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('JawCrusherItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Jungle Campfire Salad',
      'nameID': 'JungleCampfireSalad',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Greens'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('HeartOfPalmItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PineappleItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('JungleCampfireSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Jungle Campfire Stew',
      'nameID': 'JungleCampfireStew',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 4,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fungus'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('JungleCampfireStewItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Kelpy Crab Roll',
      'nameID': 'KelpyCrabRoll',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 3,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoiledRiceItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrabCarcassItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('KelpItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('KelpyCrabRollItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Kiln',
      'nameID': 'Kiln',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('KilnItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Kitchen',
      'nameID': 'Kitchen',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CookingUtensilsItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('KitchenItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Laboratory',
      'nameID': 'Laboratory',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LaboratoryItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Bath Mat',
      'nameID': 'LargeBathMat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('LinenFabricItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeBathMatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Corrugated Steel Door',
      'nameID': 'LargeCorrugatedSteelDoor',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 5,
      'labor': 480,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CorrugatedSteelItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeCorrugatedSteelDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Hanging Ashlar Stone Sign',
      'nameID': 'LargeHangingAshlarStoneSign',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeHangingAshlarStoneSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Hanging Lumber Sign',
      'nameID': 'LargeHangingLumberSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeHangingLumberSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Hanging Mortared Stone Sign',
      'nameID': 'LargeHangingMortaredStoneSign',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeHangingMortaredStoneSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Hanging Wood Sign',
      'nameID': 'LargeHangingWoodSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeHangingWoodSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Lumber Door',
      'nameID': 'LargeLumberDoor',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 20,
          'reducible': false
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 30,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeLumberDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Lumber Stockpile',
      'nameID': 'LargeLumberStockpile',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeLumberStockpileItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Standing Ashlar Stone Sign',
      'nameID': 'LargeStandingAshlarStoneSign',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeStandingAshlarStoneSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Standing Lumber Sign',
      'nameID': 'LargeStandingLumberSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeStandingLumberSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Standing Mortared Stone Sign',
      'nameID': 'LargeStandingMortaredStoneSign',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeStandingMortaredStoneSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Standing Wood Sign',
      'nameID': 'LargeStandingWoodSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeStandingWoodSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Windowed Lumber Door',
      'nameID': 'LargeWindowedLumberDoor',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 5,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 15,
          'reducible': false
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeWindowedLumberDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Laser',
      'nameID': 'Laser',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 6,
      'labor': 900,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': true,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('ElectricMotorItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('FramedGlassItem'),
          'quantity': 80,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 80,
          'reducible': true
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 10,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 80,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LaserItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lathe',
      'nameID': 'Lathe',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronWheelItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LatheItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Leavened Dough',
      'nameID': 'LeavenedDough',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('YeastItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LeavenedDoughItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Light Backpack',
      'nameID': 'LightBackpack',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LightBackpackItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Light Bulb',
      'nameID': 'LightBulb',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Limestone Bison Statue',
      'nameID': 'LimestoneBisonStatue',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 6,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LimestoneItem'),
          'quantity': 200,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LimestoneBisonStatueItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Limestone Otter Statue',
      'nameID': 'LimestoneOtterStatue',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LimestoneItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LimestoneOtterStatueItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Limestone Owl Statue',
      'nameID': 'LimestoneOwlStatue',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 4,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LimestoneItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LimestoneOwlStatueItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Limestone Wolf Statue',
      'nameID': 'LimestoneWolfStatue',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LimestoneItem'),
          'quantity': 80,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LimestoneWolfStatueItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Loaded Taro Fries',
      'nameID': 'LoadedTaroFries',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 5,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PreparedMeatItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TaroFriesItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LoadedTaroFriesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Logging Advanced Upgrade',
      'nameID': 'LoggingAdvancedUpgrade',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LoggingAdvancedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Logging Basic Upgrade',
      'nameID': 'LoggingBasicUpgrade',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LoggingBasicUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Loom',
      'nameID': 'Loom',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LinenYarnItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodenGearItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LoomItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Low Top Shoes',
      'nameID': 'LowTopShoes',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LowTopShoesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lumber',
      'nameID': 'Lumber',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlaxseedOilItem'),
          'quantity': 0.5,
          'reducible': true
        },
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lumber Bench',
      'nameID': 'LumberBench',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LumberBenchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lumber Chair',
      'nameID': 'LumberChair',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LumberChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lumber Door',
      'nameID': 'LumberDoor',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LumberDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lumber Dresser',
      'nameID': 'LumberDresser',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LumberDresserItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lumber Stockpile',
      'nameID': 'LumberStockpile',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 4,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LumberStockpileItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lumber Table',
      'nameID': 'LumberTable',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 18,
          'reducible': true
        },
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LumberTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Macarons',
      'nameID': 'Macarons',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 5,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberryExtractItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PastryDoughItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MacaronsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Machinist Table',
      'nameID': 'MachinistTable',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodenGearItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MachinistTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Masonry Advanced Upgrade',
      'nameID': 'MasonryAdvancedUpgrade',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('CementKilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MasonryAdvancedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Masonry Basic Upgrade',
      'nameID': 'MasonryBasicUpgrade',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MasonryBasicUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Masonry Mortar',
      'nameID': 'MasonryMortar',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Meat Pie',
      'nameID': 'MeatPie',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 5,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MeatPieItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Meat Stock',
      'nameID': 'MeatStock',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MeatStockItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Meaty Stew',
      'nameID': 'MeatyStew',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharredMeatItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MeatyStewItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mechanical Water Pump',
      'nameID': 'MechanicalWaterPump',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MechanicalWaterPumpItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mechanics Advanced Upgrade',
      'nameID': 'MechanicsAdvancedUpgrade',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MechanicsAdvancedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mechanics Modern Upgrade',
      'nameID': 'MechanicsModernUpgrade',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MechanicsModernUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Melting Fat',
      'nameID': 'MeltingFat',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Metallurgy Research Paper Advanced',
      'nameID': 'MetallurgyResearchPaperAdvanced',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MetallurgyResearchPaperAdvancedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Metallurgy Research Paper Basic',
      'nameID': 'MetallurgyResearchPaperBasic',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ResearchTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Ore'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MetallurgyResearchPaperBasicItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Metallurgy Research Paper Modern',
      'nameID': 'MetallurgyResearchPaperModern',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RebarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('InkItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MetallurgyResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mill',
      'nameID': 'Mill',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MillStoneItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MillItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Milling Upgrade',
      'nameID': 'MillingUpgrade',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MillingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Millionaires Salad',
      'nameID': 'MillionairesSalad',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 6,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CookeinaMushroomsItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('HeartOfPalmItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('PineappleItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MillionairesSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mining Advanced Upgrade',
      'nameID': 'MiningAdvancedUpgrade',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('ScreeningMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MiningAdvancedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mining Basic Upgrade',
      'nameID': 'MiningBasicUpgrade',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('RockerBoxObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MiningBasicUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mining Modern Upgrade',
      'nameID': 'MiningModernUpgrade',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 7,
      'labor': 9000,
      'craftingTable': getCraftingTableByNameID('FrothFloatationCellObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MiningModernUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mint',
      'nameID': 'Mint',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 2,
      'labor': 900,
      'craftingTable': getCraftingTableByNameID('BlacksmithTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MintItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mixed Fruit Salad',
      'nameID': 'MixedFruitSalad',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FruitSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mixed Salad',
      'nameID': 'MixedSalad',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiddleheadsItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('FireweedShootsItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mixed Vegetable Medley',
      'nameID': 'MixedVegetableMedley',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('VegetableMedleyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mochi',
      'nameID': 'Mochi',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 4,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornmealItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('RiceFlourItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MochiItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Axe',
      'nameID': 'ModernAxe',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 5,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 25,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernAxeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Double Street Light',
      'nameID': 'ModernDoubleStreetLight',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 5,
      'labor': 140,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernDoubleStreetLightItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Hammer',
      'nameID': 'ModernHammer',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 5,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 25,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernHammerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Hoe',
      'nameID': 'ModernHoe',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 5,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 25,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernHoeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Machete',
      'nameID': 'ModernMachete',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 5,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 25,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernMacheteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Pickaxe',
      'nameID': 'ModernPickaxe',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 5,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 25,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernPickaxeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Rock Drill',
      'nameID': 'ModernRockDrill',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 5,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelGearItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernRockDrillItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Scythe',
      'nameID': 'ModernScythe',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 5,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 25,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernScytheItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Shovel',
      'nameID': 'ModernShovel',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 5,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 25,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernShovelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Street Light',
      'nameID': 'ModernStreetLight',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernStreetLightItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Upgrade 1',
      'nameID': 'ModernUpgradeLvl1',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 10,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 3,
          'reducible': false
        },
        {
          'item': getItemByNameID('BasicResearch'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernUpgradeLvl1Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Upgrade 2',
      'nameID': 'ModernUpgradeLvl2',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl1Item'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelGearItem'),
          'quantity': 5,
          'reducible': false
        },
        {
          'item': getItemByNameID('CulinaryResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('BasicResearch'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernUpgradeLvl2Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Upgrade 3',
      'nameID': 'ModernUpgradeLvl3',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 8,
          'reducible': false
        },
        {
          'item': getItemByNameID('ModernUpgradeLvl2Item'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 5,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 8,
          'reducible': false
        },
        {
          'item': getItemByNameID('BasicResearch'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernUpgradeLvl3Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Upgrade 4',
      'nameID': 'ModernUpgradeLvl4',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 5,
          'reducible': false
        },
        {
          'item': getItemByNameID('ModernUpgradeLvl3Item'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 7,
          'reducible': false
        },
        {
          'item': getItemByNameID('BasicResearch'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mortared Stone',
      'nameID': 'MortaredStone',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortaredStoneItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mortared Stone Bench',
      'nameID': 'MortaredStoneBench',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 3,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 24,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortaredStoneBenchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mortared Stone Chair',
      'nameID': 'MortaredStoneChair',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortaredStoneChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mortared Stone Door',
      'nameID': 'MortaredStoneDoor',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortaredStoneDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mortared Stone Fireplace',
      'nameID': 'MortaredStoneFireplace',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 5,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortaredStoneFireplaceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mortared Stone Table',
      'nameID': 'MortaredStoneTable',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 2,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 22,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortaredStoneTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mushroom Medley',
      'nameID': 'MushroomMedley',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoleteMushroomsItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CookeinaMushroomsItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CriminiMushroomsItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('VegetableMedleyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Nail',
      'nameID': 'Nail',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 16,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Nylon',
      'nameID': 'Nylon',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PetroleumItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NylonItem'),
          'quantity': 8,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('BarrelItem'),
          'quantity': 3,
          'reducible': true,
          'primary': false
        },
        {
          'item': getItemByNameID('SulfurItem'),
          'quantity': 1,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Nylon Carpet',
      'nameID': 'NylonCarpet',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NylonCarpetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Nylon Futon Bed',
      'nameID': 'NylonFutonBed',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 6,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NylonFutonBedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Nylon Futon Couch',
      'nameID': 'NylonFutonCouch',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NylonFutonCouchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Nylon Thread',
      'nameID': 'NylonThread',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SpinMelterObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NylonItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NylonThreadItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Oil',
      'nameID': 'Oil',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CerealGermItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('Oil'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Oil Drilling Upgrade',
      'nameID': 'OilDrillingUpgrade',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OilDrillingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Oil Refinery',
      'nameID': 'OilRefinery',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 420,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoilerItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperPlateItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 24,
          'reducible': true
        },
        {
          'item': getItemByNameID('ReinforcedConcreteItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OilRefineryItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Padded Chair',
      'nameID': 'PaddedChair',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PaddedChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Papaya Seed',
      'nameID': 'PapayaSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PapayaSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Paper',
      'nameID': 'Paper',
      'skill': getSkillByNameID('PaperMillingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('SmallPaperMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Paper Milling Upgrade',
      'nameID': 'PaperMillingUpgrade',
      'skill': getSkillByNameID('PaperMillingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('SmallPaperMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PaperMillingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pastry Dough',
      'nameID': 'PastryDough',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fat'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('YeastItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PastryDoughItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pelt Fertilizer',
      'nameID': 'PeltFertilizer',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FertilizerFiller'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PeltFertilizerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Petroleum',
      'nameID': 'Petroleum',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('PumpJackObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BarrelItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PetroleumItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Phad Thai',
      'nameID': 'PhadThai',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 6,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AcornItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeanSproutItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Oil'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PreparedMeatItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('RiceNoodlesItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PhadThaiItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Phosphate Fertilizer',
      'nameID': 'PhosphateFertilizer',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedLimestoneItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrushedSulfurItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('FertilizerFiller'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PhosphateFertilizerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pineapple Friend Rice',
      'nameID': 'PineappleFriendRice',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 5,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoiledRiceItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('CharredPineappleItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PineappleFriendRiceItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pineapple Seed',
      'nameID': 'PineappleSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PineappleItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PineappleSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pirozhok',
      'nameID': 'Pirozhok',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fungus'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PastryDoughItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PreparedMeatItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PirozhokItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Piston',
      'nameID': 'Piston',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ScrewPressObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Plastic',
      'nameID': 'Plastic',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PetroleumItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('BarrelItem'),
          'quantity': 3,
          'reducible': true,
          'primary': false
        },
        {
          'item': getItemByNameID('SulfurItem'),
          'quantity': 1,
          'reducible': true,
          'primary': false
        },
      ]
    },
    {
      'name': 'Poke Bowl',
      'nameID': 'PokeBowl',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 4,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('BoiledRiceItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('KelpItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TunaItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PokeBowlItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Portable Steam Engine',
      'nameID': 'PortableSteamEngine',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoilerItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 18,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperPipeItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PortableSteamEngineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pottery Upgrade',
      'nameID': 'PotteryUpgrade',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('PotteryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PotteryUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Powered Cart',
      'nameID': 'PoweredCart',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 5,
      'labor': 200,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CastIronStoveItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronWheelItem'),
          'quantity': 3,
          'reducible': false
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PoweredCartItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Powered Storage Silo',
      'nameID': 'PoweredStorageSilo',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 3,
      'labor': 800,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 18,
          'reducible': true
        },
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPipeItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PoweredStorageSiloItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Prepared Meat',
      'nameID': 'PreparedMeat',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 4,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PreparedMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 4,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Prickly Pear Seed',
      'nameID': 'PricklyPearSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PricklyPearFruitItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PricklyPearSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Prime Cut',
      'nameID': 'PrimeCut',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 6,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PrimeCutItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pulp Filler',
      'nameID': 'PulpFiller',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('DirtItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodPulpItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PulpFillerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pump Jack',
      'nameID': 'PumpJack',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 72,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('ReinforcedConcreteItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PumpJackItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pumpkin Seed',
      'nameID': 'PumpkinSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PumpkinItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PumpkinSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pupusas',
      'nameID': 'Pupusas',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 4,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CornmealItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PupusasItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Quicklime',
      'nameID': 'Quicklime',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedLimestoneItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('QuicklimeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Quicklime Glass',
      'nameID': 'QuicklimeGlass',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 4,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('QuicklimeItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Radiator',
      'nameID': 'Radiator',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 35,
      'craftingTable': getCraftingTableByNameID('ElectricStampingPressObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('HeatSinkItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rainforest Fruit Salad',
      'nameID': 'RainforestFruitSalad',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('PineappleItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FruitSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rainforest Salad',
      'nameID': 'RainforestSalad',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoleteMushroomsItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('PapayaItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Raw Bacon',
      'nameID': 'RawBacon',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawBaconItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 3,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Raw Roast',
      'nameID': 'RawRoast',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawRoastItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 2,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Raw Sausage',
      'nameID': 'RawSausage',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawSausageItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Real Estate Desk',
      'nameID': 'RealEstateDesk',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 4,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('LinenFabricItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RealEstateDeskItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rebar',
      'nameID': 'Rebar',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RebarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Recurve Bow',
      'nameID': 'RecurveBow',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 3,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('FletchingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LinenYarnItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RecurveBowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Refine Tallow',
      'nameID': 'RefineTallow',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 18,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('Oil'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Refrigerator',
      'nameID': 'Refrigerator',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 4,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RefrigeratorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Registrar',
      'nameID': 'Registrar',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 4,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronOreItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RegistrarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Reinforced Concrete',
      'nameID': 'ReinforcedConcrete',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CementKilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrushedRock'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('RebarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ReinforcedConcreteItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Render Fat',
      'nameID': 'RenderFat',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rice Flour',
      'nameID': 'RiceFlour',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RiceItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RiceFlourItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CerealGermItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Rice Noodles',
      'nameID': 'RiceNoodles',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RiceFlourItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RiceNoodlesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rivet',
      'nameID': 'Rivet',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 85,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Roast Pumpkin',
      'nameID': 'RoastPumpkin',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PumpkinItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RoastPumpkinItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Robotic Assembly Line',
      'nameID': 'RoboticAssemblyLine',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 2,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('ElectricMotorItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('ServoItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RoboticAssemblyLineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rocker Box',
      'nameID': 'RockerBox',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RockerBoxItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rolling Mill',
      'nameID': 'RollingMill',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RollingMillItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Root Campfire Salad',
      'nameID': 'RootCampfireSalad',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Greens'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RootCampfireSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Root Campfire Stew',
      'nameID': 'RootCampfireStew',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 4,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fat'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RootCampfireStewItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Round Pot',
      'nameID': 'RoundPot',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PlanterPotRoundItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rubber Wheel',
      'nameID': 'RubberWheel',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ElectricLatheObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrushedSulfurItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RubberWheelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rug Large',
      'nameID': 'RugLarge',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoolYarnItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RugLargeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rug Medium',
      'nameID': 'RugMedium',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoolYarnItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RugMediumItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rug Small',
      'nameID': 'RugSmall',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoolYarnItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RugSmallItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Running Shoes',
      'nameID': 'RunningShoes',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 2,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RunningShoesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Salt Basket',
      'nameID': 'SaltBasket',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 3,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SaltBasketItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sand Concentrate',
      'nameID': 'SandConcentrate',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('RockerBoxObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Silica'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sand Concentrate Lv2',
      'nameID': 'SandConcentrateLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('ScreeningMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Silica'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sand Concentrate Lv3',
      'nameID': 'SandConcentrateLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 6,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('SensorBasedBeltSorterObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Silica'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Saw Boards',
      'nameID': 'SawBoards',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sawmill',
      'nameID': 'Sawmill',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 2,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('BlacksmithTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronSawBladeItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SawmillItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Scrap Meat',
      'nameID': 'ScrapMeat',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ScrapMeatItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Screening Machine',
      'nameID': 'ScreeningMachine',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 3,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ScreeningMachineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Screw Press',
      'nameID': 'ScrewPress',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ScrewPressItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Screws',
      'nameID': 'Screws',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('LatheObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Seared Meat',
      'nameID': 'SearedMeat',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('StoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('InfusedOilItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PrimeCutItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SearedMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Seeded Camas Roll',
      'nameID': 'SeededCamasRoll',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 3,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoiledRiceItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CamasPasteItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('FiddleheadsItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('KelpItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SeededCamasRollItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sensor Based Belt Sorter',
      'nameID': 'SensorBasedBeltSorter',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 4,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('ElectricMotorItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelGearboxItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SensorBasedBeltSorterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sensuous Sea Pizza',
      'nameID': 'SensuousSeaPizza',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('KelpItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeavenedDoughItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SensuousSeaPizzaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Servo',
      'nameID': 'Servo',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ServoItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shale Brick',
      'nameID': 'ShaleBrick',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 1,
      'labor': 200,
      'craftingTable': getCraftingTableByNameID('PotteryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrushedShaleItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodenMoldItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WetBrickItem'),
          'quantity': 8,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shaper',
      'nameID': 'Shaper',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ShaperItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shark Fillet Soup',
      'nameID': 'SharkFilletSoup',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 2,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BlueSharkItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('MeatStockItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SharkFilletSoupItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sheep Mount',
      'nameID': 'SheepMount',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 4,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BighornCarcassItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SheepMountItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shelf Cabinet',
      'nameID': 'ShelfCabinet',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 14,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ShelfCabinetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shorts',
      'nameID': 'Shorts',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ShortsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Simmered Meat',
      'nameID': 'SimmeredMeat',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 2,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MeatStockItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PreparedMeatItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SimmeredMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Simple Syrup',
      'nameID': 'SimpleSyrup',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SimpleSyrupItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sink',
      'nameID': 'Sink',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 110,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SinkItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Skid Steer',
      'nameID': 'SkidSteer',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 2,
      'labor': 2500,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedCombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('RubberWheelItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelSpringItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SkidSteerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Bath Mat',
      'nameID': 'SmallBathMat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallBathMatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Hanging Ashlar Stone Sign',
      'nameID': 'SmallHangingAshlarStoneSign',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallHangingAshlarStoneSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Hanging Lumber Sign',
      'nameID': 'SmallHangingLumberSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallHangingLumberSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Hanging Mortared Stone Sign',
      'nameID': 'SmallHangingMortaredStoneSign',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallHangingMortaredStoneSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Hanging Wood Sign',
      'nameID': 'SmallHangingWoodSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallHangingWoodSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Sink',
      'nameID': 'SmallSink',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WhitePowderItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallSinkItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Standing Ashlar Stone Sign',
      'nameID': 'SmallStandingAshlarStoneSign',
      'skill': getSkillByNameID('AdvancedMasonrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AdvancedMasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarStone'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallStandingAshlarStoneSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Standing Lumber Sign',
      'nameID': 'SmallStandingLumberSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallStandingLumberSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Standing Mortared Stone Sign',
      'nameID': 'SmallStandingMortaredStoneSign',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallStandingMortaredStoneSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Standing Wood Sign',
      'nameID': 'SmallStandingWoodSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallStandingWoodSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Wood Cart',
      'nameID': 'SmallWoodCart',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallWoodCartItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Smelt Copper',
      'nameID': 'SmeltCopper',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BloomeryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperConcentrateItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClayMoldItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 6,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 2,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Smelt Gold',
      'nameID': 'SmeltGold',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 4,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BloomeryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldConcentrateItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClayMoldItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 6,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 2,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Smelt Iron',
      'nameID': 'SmeltIron',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BloomeryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronConcentrateItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClayMoldItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 6,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 2,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Smelting Upgrade',
      'nameID': 'SmeltingUpgrade',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmeltingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Smith Apron',
      'nameID': 'SmithApron',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmithApronItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Smith Bandana',
      'nameID': 'SmithBandana',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmithBandanaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Smith Boots',
      'nameID': 'SmithBoots',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmithBootsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Smith Gloves',
      'nameID': 'SmithGloves',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmithGlovesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Smith Pants',
      'nameID': 'SmithPants',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmithPantsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Smooth Gut Noodle Roll',
      'nameID': 'SmoothGutNoodleRoll',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 4,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Oil'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PreparedMeatItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('RiceNoodlesItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmoothGutNoodleRollItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Soil Sampler',
      'nameID': 'SoilSampler',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 0,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('ToolBenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SoilSamplerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Solar Generator',
      'nameID': 'SolarGenerator',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 5,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('BoilerItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('ServoItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SolarGeneratorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Spiky Roll',
      'nameID': 'SpikyRoll',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoiledRiceItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('UrchinItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SpikyRollItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Spin Melter',
      'nameID': 'SpinMelter',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SpinMelterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Spin Wool Yarn',
      'nameID': 'SpinWoolYarn',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ShornWoolItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoolYarnItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Square Belt',
      'nameID': 'SquareBelt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SquareBeltItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Square Pot',
      'nameID': 'SquarePot',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PlanterPotSquareItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stamp Mill',
      'nameID': 'StampMill',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 14,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 14,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StampMillItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Standing Glass Sign',
      'nameID': 'StandingGlassSign',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StandingGlassSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Standing Long Steel Sign',
      'nameID': 'StandingLongSteelSign',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StandingLongSteelSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Standing Steel Brick Sign',
      'nameID': 'StandingSteelBrickSign',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StandingSteelBrickSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steam Engine',
      'nameID': 'SteamEngine',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 450,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 24,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteamEngineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steam Tractor',
      'nameID': 'SteamTractor',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 1000,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronAxleItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronWheelItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('PortableSteamEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 24,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteamTractorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steam Tractor Harvester',
      'nameID': 'SteamTractorHarvester',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteamTractorHarvesterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steam Tractor Plow',
      'nameID': 'SteamTractorPlow',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 18,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteamTractorPlowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steam Tractor Sower',
      'nameID': 'SteamTractorSower',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 18,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteamTractorSowerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steam Truck',
      'nameID': 'SteamTruck',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 1000,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronAxleItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronWheelItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('PortableSteamEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 24,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteamTruckItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Axe',
      'nameID': 'SteelAxe',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 3,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelAxeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Axle',
      'nameID': 'SteelAxle',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ElectricLatheObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Bar',
      'nameID': 'SteelBar',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedCoalItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronConcentrateItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('QuicklimeItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('CeramicMoldItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 4,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Charcoal Steel',
      'nameID': 'CharcoalSteel',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharcoalItem'),
          'quantity': 8,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronConcentrateItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('QuicklimeItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('CeramicMoldItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('SlagItem'),
          'quantity': 4,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Steel Ceiling Light',
      'nameID': 'SteelCeilingLight',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelCeilingLightItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Floor Lamp',
      'nameID': 'SteelFloorLamp',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelFloorLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Gear',
      'nameID': 'SteelGear',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ElectricPlanerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelGearItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Gearbox',
      'nameID': 'SteelGearbox',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 2,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('ElectricPlanerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelGearItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelGearboxItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Hammer',
      'nameID': 'SteelHammer',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 3,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelHammerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Hoe',
      'nameID': 'SteelHoe',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 3,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelHoeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Machete',
      'nameID': 'SteelMachete',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 3,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelMacheteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Pickaxe',
      'nameID': 'SteelPickaxe',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 3,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelPickaxeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Pipe',
      'nameID': 'SteelPipe',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelPipeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Plate',
      'nameID': 'SteelPlate',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ElectricStampingPressObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Saw Blade',
      'nameID': 'SteelSawBlade',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelSawBladeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Shovel',
      'nameID': 'SteelShovel',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 3,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelShovelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Sickle',
      'nameID': 'SteelSickle',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 3,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelSickleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Table Lamp',
      'nameID': 'SteelTableLamp',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelTableLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stone Brazier',
      'nameID': 'StoneBrazier',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Rock'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StoneBrazierItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stone Road',
      'nameID': 'StoneRoad',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedRock'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StoneRoadItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stone Road Tool',
      'nameID': 'StoneRoadTool',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('ToolBenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Rock'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StoneRoadToolItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stop Sign',
      'nameID': 'StopSign',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StopSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Storage Silo',
      'nameID': 'StorageSilo',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 3,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPipeItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StorageSiloItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stove',
      'nameID': 'Stove',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 5,
      'labor': 900,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StoveItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Street Sign',
      'nameID': 'StreetSign',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StreetSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Streetlamp',
      'nameID': 'Streetlamp',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StreetlampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stuffed Alligator',
      'nameID': 'StuffedAlligator',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 5,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AlligatorCarcassItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StuffedAlligatorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stuffed Bison',
      'nameID': 'StuffedBison',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 6,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BisonCarcassItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StuffedBisonItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stuffed Elk',
      'nameID': 'StuffedElk',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 5,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ElkCarcassItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StuffedElkItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stuffed Goat',
      'nameID': 'StuffedGoat',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 5,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('MountainGoatCarcassItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StuffedGoatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stuffed Jaguar',
      'nameID': 'StuffedJaguar',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 5,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('JaguarCarcassItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StuffedJaguarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stuffed Turkey',
      'nameID': 'StuffedTurkey',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 4,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BreadItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PrimeCutItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('VegetableMedleyItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StuffedTurkeyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stuffed Wolf',
      'nameID': 'StuffedWolf',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 5,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('WolfCarcassItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StuffedWolfItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Substrate',
      'nameID': 'Substrate',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SubstrateItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sugar',
      'nameID': 'Sugar',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sun Cheese',
      'nameID': 'SunCheese',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Oil'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('RiceItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunflowerSeedItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('YeastItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sunflower Oil',
      'nameID': 'SunflowerOil',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 4,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SunflowerSeedItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('Oil'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sunflower Seed',
      'nameID': 'SunflowerSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SunflowerItem'),
          'quantity': 0.5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SunflowerSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sweet Salad',
      'nameID': 'SweetSalad',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 3,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicSaladItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('FruitSaladItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SimpleSyrupItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SweetSaladItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Synthetic Rubber',
      'nameID': 'SyntheticRubber',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedSulfurItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('PetroleumItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('BarrelItem'),
          'quantity': 3,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Tailor Bowler Hat',
      'nameID': 'TailorBowlerHat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TailorBowlerHatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tailor Pants',
      'nameID': 'TailorPants',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TailorPantsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tailor Shirt',
      'nameID': 'TailorShirt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TailorShirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tailor Shoes',
      'nameID': 'TailorShoes',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TailorShoesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tailoring Basic Upgrade',
      'nameID': 'TailoringBasicUpgrade',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TailoringBasicUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tailoring Modern Upgrade',
      'nameID': 'TailoringModernUpgrade',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 7,
      'labor': 9000,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ModernUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TailoringModernUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tailoring Table',
      'nameID': 'TailoringTable',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 50,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TailoringTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tall Boots',
      'nameID': 'TallBoots',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TallBootsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tallow Candle',
      'nameID': 'TallowCandle',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 2,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TallowCandleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tallow Lamp',
      'nameID': 'TallowLamp',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 2,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TallowLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tallow Wall Lamp',
      'nameID': 'TallowWallLamp',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 3,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('BlacksmithTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TallowWallLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Taro Fries',
      'nameID': 'TaroFries',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Oil'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TaroFriesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Taro Seed',
      'nameID': 'TaroSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TaroRootItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TaroSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tasty Tropical Pizza',
      'nameID': 'TastyTropicalPizza',
      'skill': getSkillByNameID('AdvancedBakingSkill'),
      'level': 3,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeavenedDoughItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PineappleItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawBaconItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TastyTropicalPizzaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Toilet',
      'nameID': 'Toilet',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPipeItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('WhitePowderItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ToiletItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tomato Seed',
      'nameID': 'TomatoSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TomatoItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TomatoSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Topped Porridge',
      'nameID': 'ToppedPorridge',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 1,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BoiledGrainsItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fruit'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ToppedPorridgeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tortilla',
      'nameID': 'Tortilla',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 2,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornmealItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TortillaItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Towel Rack',
      'nameID': 'TowelRack',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 4,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TowelRackItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Transmission Pole',
      'nameID': 'TransmissionPole',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 480,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 14,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TransmissionPoleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Trousers',
      'nameID': 'Trousers',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TrousersItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Truck',
      'nameID': 'Truck',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 2,
      'labor': 2000,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('RubberWheelItem'),
          'quantity': 6,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelSpringItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TruckItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Upholstered Chair',
      'nameID': 'UpholsteredChair',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 6,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelSpringItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('UpholsteredChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Upholstered Couch',
      'nameID': 'UpholsteredCouch',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 6,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelSpringItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('UpholsteredCouchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Valve',
      'nameID': 'Valve',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelGearboxItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelPipeItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ValveItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Vegetable Soup',
      'nameID': 'VegetableSoup',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('VegetableMedleyItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('VegetableStockItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('VegetableSoupItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Vegetable Stock',
      'nameID': 'VegetableStock',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 3,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('VegetableMedleyItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('VegetableStockItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wainwright Table',
      'nameID': 'WainwrightTable',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WainwrightTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wall Candle',
      'nameID': 'WallCandle',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('BlacksmithTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('TallowCandleItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WallCandleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Washboard',
      'nameID': 'Washboard',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WashboardItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Washing Machine',
      'nameID': 'WashingMachine',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 3,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WashingMachineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Waste Filter',
      'nameID': 'WasteFilter',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 480,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CementItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WasteFilterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Waterwheel',
      'nameID': 'Waterwheel',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodenHullPlanksItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WaterwheelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Cotton Curtains',
      'nameID': 'WeaveCottonCurtains',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonCurtainsItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Cotton Fabric',
      'nameID': 'WeaveCottonFabric',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Large Bath Mat',
      'nameID': 'WeaveLargeBathMat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 35,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeBathMatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Nylon Curtains',
      'nameID': 'WeaveNylonCurtains',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonThreadItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NylonCurtainsItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Nylon Fabric',
      'nameID': 'WeaveNylonFabric',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NylonThreadItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Small Bath Mat',
      'nameID': 'WeaveSmallBathMat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 6,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallBathMatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Wool Curtains',
      'nameID': 'WeaveWoolCurtains',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoolFabricItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoolCurtainsItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Wool Fabric',
      'nameID': 'WeaveWoolFabric',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoolYarnItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoolFabricItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wheat Ethanol',
      'nameID': 'WheatEthanol',
      'skill': getSkillByNameID('CuttingEdgeCookingSkill'),
      'level': 0,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WheatItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('EthanolItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wheat Mortar',
      'nameID': 'WheatMortar',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WheatItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wheat Seed',
      'nameID': 'WheatSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WheatItem'),
          'quantity': 0.5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WheatSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wheelbarrow',
      'nameID': 'Wheelbarrow',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 75,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WheelbarrowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wild Mix',
      'nameID': 'WildMix',
      'skill': getSkillByNameID('AdvancedCookingSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('KitchenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicSaladItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberryExtractItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WildMixItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wild Stew',
      'nameID': 'WildStew',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 6,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Vegetable'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WildStewItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wilted Fiddleheads',
      'nameID': 'WiltedFiddleheads',
      'skill': getSkillByNameID('CampfireCookingSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiddleheadsItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WiltedFiddleheadsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wind Turbine',
      'nameID': 'WindTurbine',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelGearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('ServoItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WindTurbineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Windmill',
      'nameID': 'Windmill',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LinenFabricItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WindmillItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wood Cart',
      'nameID': 'WoodCart',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodenWheelItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodCartItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Ceiling Light',
      'nameID': 'WoodenCeilingLight',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenCeilingLightItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wood Shop Cart',
      'nameID': 'WoodShopCart',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 225,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('WoodCartItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('StoreItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodShopCartItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Elevator',
      'nameID': 'WoodenElevator',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 500,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('PortableSteamEngineItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenElevatorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Fabric Bed',
      'nameID': 'WoodenFabricBed',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenFabricBedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Floor Lamp',
      'nameID': 'WoodenFloorLamp',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenFloorLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Kitchen Lamp',
      'nameID': 'WoodenKitchenLamp',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenKitchenLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Latrine',
      'nameID': 'WoodenLatrine',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LatrineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Straw Bed',
      'nameID': 'WoodenStrawBed',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 40,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenStrawBedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Table Lamp',
      'nameID': 'WoodenTableLamp',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenTableLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Wheel',
      'nameID': 'WoodenWheel',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenWheelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wool Carpet',
      'nameID': 'WoolCarpet',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('EpoxyItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoolFabricItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoolCarpetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wool Curtains',
      'nameID': 'WoolCurtains',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonThreadItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoolFabricItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoolCurtainsItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wool Fabric',
      'nameID': 'WoolFabric',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoolYarnItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoolFabricItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wool Yarn',
      'nameID': 'WoolYarn',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ShornWoolItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoolYarnItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Work Backpack',
      'nameID': 'WorkBackpack',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WorkBackpackItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Work Boots',
      'nameID': 'WorkBoots',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CelluloseFiberItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WorkBootsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Worldly Donut',
      'nameID': 'WorldlyDonut',
      'skill': getSkillByNameID('BakingSkill'),
      'level': 4,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Oil'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PastryDoughItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WorldlyDonutItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Yeast',
      'nameID': 'Yeast',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 4,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('YeastItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Galaxy Vase',
      'nameID': 'GalaxyVase',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BluePowderItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GalaxyVaseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Orange Vase',
      'nameID': 'OrangeVase',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronOxideItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('YellowPowderItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OrangeVaseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Plant Vase',
      'nameID': 'PlantVase',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CyanPowderItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronOxideItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PlantVaseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Purple Vase',
      'nameID': 'PurpleVase',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronOxideItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('BluePowderItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PurpleVaseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Red Vase',
      'nameID': 'RedVase',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronOxideItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RedVaseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Swirl Vase',
      'nameID': 'SwirlVase',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CyanPowderItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SwirlVaseItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Copper Plate',
      'nameID': 'CopperPlate',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('ScrewPressObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperPlateItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Camera Film',
      'nameID': 'CameraFilm',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CameraFilmItem'),
          'quantity': 10,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Canvas',
      'nameID': 'Canvas',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LinenFabricItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CanvasItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Colored Powder',
      'nameID': 'ColoredPowder',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 24,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Petals'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ColoredPowderItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Compost Spoiled Food',
      'nameID': 'CompostSpoiledFood',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 3,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SpoiledFoodItem'),
          'quantity': 6,
          'reducible': false
        },
        {
          'item': getItemByNameID('DirtItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompostFertilizerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Copper Frame Wide',
      'nameID': 'CopperFrameWide',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 4,
      'labor': 160,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperFrameWideItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cotton Canvas',
      'nameID': 'CottonCanvas',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CanvasItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cotton Seed',
      'nameID': 'CottonSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonBollItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cotton Streamer Stars',
      'nameID': 'CottonStreamerStars',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonStreamerStarsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cotton Streamer Stripes',
      'nameID': 'CottonStreamerStripes',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CottonStreamerStripesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cottonseed Oil',
      'nameID': 'CottonseedOil',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 4,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonSeedItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('Oil'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Court Chair',
      'nameID': 'CourtChair',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 2,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CourtChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Creosote Bush Seed',
      'nameID': 'CreosoteBushSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CreosoteFlowerItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CreosoteBushSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Decorative Anchor',
      'nameID': 'DecorativeAnchor',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 4,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('BlacksmithTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DecorativeAnchorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Decorative Glass Buoy Blue',
      'nameID': 'DecorativeGlassBuoyBlue',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HempMooringRopeItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DecorativeGlassBuoyBlueItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Decorative Hanging Buoy',
      'nameID': 'DecorativeHangingBuoy',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 4,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SmallShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DecorativeHangingBuoyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Decorative Life Preserver',
      'nameID': 'DecorativeLifePreserver',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SmallShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DecorativeLifePreserverItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Decorative Ship Wheel',
      'nameID': 'DecorativeShipWheel',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 2,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DecorativeShipWheelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fiber Scutching Station',
      'nameID': 'FiberScutchingStation',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 2,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FiberScutchingStationItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish Rack',
      'nameID': 'FishRack',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 2,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FishRackItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Flax Fiber',
      'nameID': 'FlaxFiber',
      'skill': getSkillByNameID('GatheringSkill'),
      'level': 2,
      'labor': 35,
      'craftingTable': getCraftingTableByNameID('FiberScutchingStationObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlaxStemItem'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FlaxFiberItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 0.25,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Flax Seed',
      'nameID': 'FlaxSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlaxStemItem'),
          'quantity': 0.5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FlaxSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Flax Trawler Net',
      'nameID': 'FlaxTrawlerNet',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LinenYarnItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FlaxTrawlerNetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Flaxseed Oil',
      'nameID': 'FlaxseedOil',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlaxSeedItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FlaxseedOilItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Gathering Basic Upgrade',
      'nameID': 'GatheringBasicUpgrade',
      'skill': getSkillByNameID('GatheringSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('FiberScutchingStationObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GatheringBasicUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Glass Lens',
      'nameID': 'GlassLens',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('GlassworksObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GlassLensItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Gold Frame Wide',
      'nameID': 'GoldFrameWide',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 4,
      'labor': 160,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GoldFrameWideItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Handheld Camera',
      'nameID': 'HandheldCamera',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 3,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('GlassLensItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HandheldCameraItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hemp Mooring Rope',
      'nameID': 'HempMooringRope',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LinenYarnItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HempMooringRopeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Huge Banner Sign',
      'nameID': 'HugeBannerSign',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('LinenYarnItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HugeBannerSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Huge Iron Banner Sign',
      'nameID': 'HugeIronBannerSign',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HugeIronBannerSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Huge Iron Sign',
      'nameID': 'HugeIronSign',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HugeIronSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Huge Steel Banner Sign',
      'nameID': 'HugeSteelBannerSign',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 16,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 6,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HugeSteelBannerSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Huge Steel Sign',
      'nameID': 'HugeSteelSign',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('RollingMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 3,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HugeSteelSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Huge Wooden Banner Sign',
      'nameID': 'HugeWoodenBannerSign',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 6,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('LinenYarnItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HugeWoodenBannerSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Industrial Barge',
      'nameID': 'IndustrialBarge',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 6,
      'labor': 2500,
      'craftingTable': getCraftingTableByNameID('MediumShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronHullSheetItem'),
          'quantity': 18,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonMooringRopeItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('MetalRudderItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronAnchorItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('CombustionEngineItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('LargeMetalShipFrameItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IndustrialBargeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Industrial Generator',
      'nameID': 'IndustrialGenerator',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 4,
      'labor': 2400,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 48,
          'reducible': true
        },
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 32,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelPipeItem'),
          'quantity': 32,
          'reducible': true
        },
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 64,
          'reducible': true
        },
        {
          'item': getItemByNameID('AdvancedCombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('RadiatorItem'),
          'quantity': 24,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelAxleItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IndustrialGeneratorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Anchor',
      'nameID': 'IronAnchor',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('BlacksmithTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronAnchorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Frame Wide',
      'nameID': 'IronFrameWide',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 4,
      'labor': 160,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronFrameWideItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Hull Sheet',
      'nameID': 'IronHullSheet',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('MediumShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronHullSheetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Road Tool',
      'nameID': 'IronRoadTool',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 3,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronRoadToolItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Canoe',
      'nameID': 'LargeCanoe',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('SmallShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodenHullPlanksItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodenOarItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('SmallWoodenShipFrameItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeCanoeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Cotton Bunting Red',
      'nameID': 'LargeCottonBuntingRed',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 2,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeCottonBuntingRedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Festive Paper Lantern',
      'nameID': 'LargeFestivePaperLantern',
      'skill': getSkillByNameID('PaperMillingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SmallPaperMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeFestivePaperLanternItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Metal Ship Frame',
      'nameID': 'LargeMetalShipFrame',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 6,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('MediumShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('MetalKeelItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeMetalShipFrameItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Nylon Bunting Green',
      'nameID': 'LargeNylonBuntingGreen',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeNylonBuntingGreenItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Paper Lantern',
      'nameID': 'LargePaperLantern',
      'skill': getSkillByNameID('PaperMillingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SmallPaperMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargePaperLanternItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Wooden Ship Frame',
      'nameID': 'LargeWoodenShipFrame',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 2,
      'labor': 200,
      'craftingTable': getCraftingTableByNameID('MediumShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodenKeelItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 24,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeWoodenShipFrameItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Linen Fabric',
      'nameID': 'LinenFabric',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LinenYarnItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LinenFabricItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Linen Yarn',
      'nameID': 'LinenYarn',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlaxFiberItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LinenYarnItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Medium Fishing Trawler',
      'nameID': 'MediumFishingTrawler',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('MediumShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronHullSheetItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodenHullPlanksItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('HempMooringRopeItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('MetalRudderItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronAxleItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronAnchorItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('PortableSteamEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('MediumMetalShipFrameItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MediumFishingTrawlerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Medium Metal Ship Frame',
      'nameID': 'MediumMetalShipFrame',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 5,
      'labor': 160,
      'craftingTable': getCraftingTableByNameID('MediumShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('MetalKeelItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MediumMetalShipFrameItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Medium Shipyard',
      'nameID': 'MediumShipyard',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 800,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HempMooringRopeItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MediumShipyardItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Medium Wooden Ship Frame',
      'nameID': 'MediumWoodenShipFrame',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SmallShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodenKeelItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MediumWoodenShipFrameItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Metal Keel',
      'nameID': 'MetalKeel',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ShaperObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MetalKeelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Metal Rudder',
      'nameID': 'MetalRudder',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('MediumShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MetalRudderItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Nylon Mooring Rope',
      'nameID': 'NylonMooringRope',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NylonThreadItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NylonMooringRopeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Nylon Trawler Net',
      'nameID': 'NylonTrawlerNet',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 3,
      'labor': 200,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NylonThreadItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NylonTrawlerNetItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Oil Paint',
      'nameID': 'OilPaint',
      'skill': getSkillByNameID('PaintingSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('PaintMixerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ColoredPowderItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('FlaxseedOilItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OilPaintItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Orchid Seed',
      'nameID': 'OrchidSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('OrchidItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OrchidSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ornate Gold Frame Wide',
      'nameID': 'OrnateGoldFrameWide',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 6,
      'labor': 160,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OrnateGoldFrameWideItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ornate Iron Frame Wide',
      'nameID': 'OrnateIronFrameWide',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 6,
      'labor': 160,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OrnateIronFrameWideItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ornate Wooden Frame Wide',
      'nameID': 'OrnateWoodenFrameWide',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 160,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OrnateWoodenFrameWideItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Outpost Netting',
      'nameID': 'OutpostNetting',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('SmallShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HempMooringRopeItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OutpostNettingItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Particle Boards',
      'nameID': 'ParticleBoards',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 5,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodPulpItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Plastic Buoy',
      'nameID': 'PlasticBuoy',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 4,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PlasticBuoyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Printing Press',
      'nameID': 'PrintingPress',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 3,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PistonItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PrintingPressItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Recycle Hewn Log',
      'nameID': 'RecycleHewnLog',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 3,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodPulpItem'),
          'quantity': 10,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rice Mortar',
      'nameID': 'RiceMortar',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('BakeryOvenObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RiceItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shipwright Advanced Upgrade',
      'nameID': 'ShipwrightAdvancedUpgrade',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('MediumShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ShipwrightAdvancedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shipwright Basic Upgrade',
      'nameID': 'ShipwrightBasicUpgrade',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('SmallShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ShipwrightBasicUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Canoe',
      'nameID': 'SmallCanoe',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 14,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallCanoeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Cotton Bunting Red',
      'nameID': 'SmallCottonBuntingRed',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallCottonBuntingRedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Nylon Bunting Green',
      'nameID': 'SmallNylonBuntingGreen',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NylonFabricItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallNylonBuntingGreenItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Paper Lantern',
      'nameID': 'SmallPaperLantern',
      'skill': getSkillByNameID('PaperMillingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SmallPaperMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallPaperLanternItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Paper Machine',
      'nameID': 'SmallPaperMachine',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallPaperMachineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Shipyard',
      'nameID': 'SmallShipyard',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallShipyardItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Wooden Boat',
      'nameID': 'SmallWoodenBoat',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 3,
      'labor': 680,
      'craftingTable': getCraftingTableByNameID('SmallShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodenHullPlanksItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodenWheelItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('MediumWoodenShipFrameItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallWoodenBoatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Wooden Ship Frame',
      'nameID': 'SmallWoodenShipFrame',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SmallShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodenKeelItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallWoodenShipFrameItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Buoy',
      'nameID': 'SteelBuoy',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelBuoyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Moorage Post',
      'nameID': 'SteelMooragePost',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 3,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('MediumShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('NylonMooringRopeItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelMooragePostItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Trillium Seed',
      'nameID': 'TrilliumSeed',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TrilliumFlowerItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TrilliumSeedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tripod Camera',
      'nameID': 'TripodCamera',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 3,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('GlassLensItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TripodCameraItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Cotton Canvas',
      'nameID': 'WeaveCottonCanvas',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CanvasItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Large Cotton Bunting Red',
      'nameID': 'WeaveLargeCottonBuntingRed',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 2,
      'labor': 240,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeCottonBuntingRedItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Linen Canvas',
      'nameID': 'WeaveLinenCanvas',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LinenFabricItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CanvasItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Linen Fabric',
      'nameID': 'WeaveLinenFabric',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LinenYarnItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LinenFabricItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Weave Small Cotton Bunting Red',
      'nameID': 'WeaveSmallCottonBuntingRed',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AutomaticLoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallCottonBuntingRedItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Barge',
      'nameID': 'WoodenBarge',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 4,
      'labor': 800,
      'craftingTable': getCraftingTableByNameID('SmallShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodenHullPlanksItem'),
          'quantity': 18,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('HempMooringRopeItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodenWheelItem'),
          'quantity': 2,
          'reducible': false
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('LargeWoodenShipFrameItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenBargeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Frame Wide',
      'nameID': 'WoodenFrameWide',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 4,
      'labor': 160,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenFrameWideItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Hull Planks',
      'nameID': 'WoodenHullPlanks',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('SmallShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenHullPlanksItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Keel',
      'nameID': 'WoodenKeel',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenKeelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Moorage Post',
      'nameID': 'WoodenMooragePost',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('SmallShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HempMooringRopeItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenMooragePostItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Oar',
      'nameID': 'WoodenOar',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenOarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Rudder',
      'nameID': 'WoodenRudder',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 4,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronGearItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenRudderItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Transport Ship',
      'nameID': 'WoodenTransportShip',
      'skill': getSkillByNameID('ShipwrightSkill'),
      'level': 2,
      'labor': 1000,
      'craftingTable': getCraftingTableByNameID('MediumShipyardObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodenHullPlanksItem'),
          'quantity': 18,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('HempMooringRopeItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodenRudderItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronAxleItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('PortableSteamEngineItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('LargeWoodenShipFrameItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenTransportShipItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Carbide Helmet Lamp',
      'nameID': 'CarbideHelmetLamp',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CarbideHelmetLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Coal',
      'nameID': 'CrushedCoal',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CoalItem'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedCoalItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedMixedRockItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Coal Lv2',
      'nameID': 'CrushedCoalLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 70,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CoalItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedCoalItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedMixedRockItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Coal Lv3',
      'nameID': 'CrushedCoalLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 4,
      'labor': 90,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CoalItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedCoalItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Oil Head Lamp',
      'nameID': 'OilHeadLamp',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OilHeadLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Refine Heart Of Palm',
      'nameID': 'RefineHeartOfPalm',
      'skill': getSkillByNameID('GatheringSkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('FiberScutchingStationObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PalmLogItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HeartOfPalmItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('WoodPulpItem'),
          'quantity': 4,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Sandals',
      'nameID': 'Sandals',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 1,
      'labor': 150,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SandalsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shipwright Overalls',
      'nameID': 'ShipwrightOveralls',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ShipwrightOverallsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shipwright Hat',
      'nameID': 'ShipwrightHat',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ShipwrightHatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shipwright Sandals',
      'nameID': 'ShipwrightSandals',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ShipwrightSandalsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shipwright Shirt',
      'nameID': 'ShipwrightShirt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ShipwrightShirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Smith Shirt',
      'nameID': 'SmithShirt',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('AdvancedTailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmithShirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wet Brick',
      'nameID': 'WetBrick',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 1,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('PotteryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodenMoldItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WetBrickItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Mold',
      'nameID': 'WoodenMold',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NailItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenMoldItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Abstract Fixture',
      'nameID': 'SteelAbstractFixture',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelAbstractFixtureItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Hanging Lamp',
      'nameID': 'SteelHangingLamp',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 4,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelHangingLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Kitchen Lamp',
      'nameID': 'SteelKitchenLamp',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelKitchenLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Searchlight',
      'nameID': 'SteelSearchlight',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('RoboticAssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('RivetItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 4,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelSearchlightItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Clean Crab',
      'nameID': 'CleanCrab',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrabCarcassItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Clean Large Fish',
      'nameID': 'CleanLargeFish',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LargeFish'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Clean Medium Fish',
      'nameID': 'CleanMediumFish',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MediumFish'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Clean Moon Jellyfish',
      'nameID': 'CleanMoonJellyfish',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MoonJellyfishItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Clean Pacific Sardine',
      'nameID': 'CleanPacificSardine',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PacificSardineItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Clean Urchins',
      'nameID': 'CleanUrchins',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('UrchinItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Dry Fish',
      'nameID': 'DryFish',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 2,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FishRackObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DriedFishItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Dry Meat',
      'nameID': 'DryMeat',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 2,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FishRackObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DriedMeatItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Geology Research Paper Modern Glass',
      'nameID': 'GeologyResearchPaperModernGlass',
      'skill': getSkillByNameID('GlassworkingSkill'),
      'level': 1,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('LaboratoryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('InkItem'),
          'quantity': 4,
          'reducible': false
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GeologyResearchPaperModernItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hunting Upgrade',
      'nameID': 'HuntingUpgrade',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HuntingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shred Kelp',
      'nameID': 'ShredKelp',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('KelpItem'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 7,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Shuck Clams',
      'nameID': 'ShuckClams',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 1,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FisheryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClamItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sweet Jerky',
      'nameID': 'SweetJerky',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 4,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('FishRackObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fruit'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Oil'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('RawMeatItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SweetDeerJerkyItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Easel',
      'nameID': 'Easel',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 160,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CanvasItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('EaselItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Art Supplies',
      'nameID': 'ArtSupplies',
      'skill': getSkillByNameID('PaintingSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('PaintMixerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CanvasItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('OilPaintItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ArtSuppliesItem'),
          'quantity': 8,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Arrow Bundle',
      'nameID': 'ArrowBundle',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('FletchingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ArrowItem'),
          'quantity': 20,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Blacksmith Advanced Upgrade',
      'nameID': 'BlacksmithAdvancedUpgrade',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('BlacksmithTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BlacksmithAdvancedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Blacksmith Table',
      'nameID': 'BlacksmithTable',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BlacksmithTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Blacksmith Upgrade',
      'nameID': 'BlacksmithUpgrade',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('BlacksmithTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BlacksmithUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cast Iron Bench',
      'nameID': 'CastIronBench',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 3,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BloomeryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClayMoldItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CastIronBenchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cast Iron Chair',
      'nameID': 'CastIronChair',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 2,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BloomeryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClayMoldItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CastIronChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cast Iron Table',
      'nameID': 'CastIronTable',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 6,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('BloomeryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('ClayMoldItem'),
          'quantity': 3,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CastIronTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ceramic Mold',
      'nameID': 'CeramicMold',
      'skill': getSkillByNameID('PotterySkill'),
      'level': 1,
      'labor': 200,
      'craftingTable': getCraftingTableByNameID('PotteryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('SandItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Silica'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CeramicMoldItem'),
          'quantity': 8,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Clay Mold',
      'nameID': 'ClayMold',
      'skill': getSkillByNameID('GatheringSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('PotteryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('ClayItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ClayMoldItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Dense Charcoal',
      'nameID': 'DenseCharcoal',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 5,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 7,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharcoalItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish Oil',
      'nameID': 'FishOil',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 4,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fish Stock',
      'nameID': 'FishStock',
      'skill': getSkillByNameID('CookingSkill'),
      'level': 5,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CastIronStoveObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MeatStockItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fletching Table',
      'nameID': 'FletchingTable',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 2,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FletchingTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Gathering Advanced Upgrade',
      'nameID': 'GatheringAdvancedUpgrade',
      'skill': getSkillByNameID('GatheringSkill'),
      'level': 7,
      'labor': 6000,
      'craftingTable': getCraftingTableByNameID('PotteryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdvancedUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GatheringAdvancedUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Grindstone',
      'nameID': 'Grindstone',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GrindstoneItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ink',
      'nameID': 'Ink',
      'skill': getSkillByNameID('PaintingSkill'),
      'level': 4,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('PaintMixerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharcoalPowderItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Oil'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('InkItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lighthouse Lamp',
      'nameID': 'LighthouseLamp',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 4,
      'labor': 480,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('ElectricMotorItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LighthouseLampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Pottery Table',
      'nameID': 'PotteryTable',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 3,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WoodenWheelItem'),
          'quantity': 1,
          'reducible': false
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PotteryTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Power Hammer',
      'nameID': 'PowerHammer',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperPlateItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PowerHammerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Printing Supplies',
      'nameID': 'PrintingSupplies',
      'skill': getSkillByNameID('PaperMillingSkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('SmallPaperMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('InkItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PrintingSuppliesItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Smelting Basic Upgrade',
      'nameID': 'SmeltingBasicUpgrade',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('BloomeryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmeltingBasicUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tanning Leather',
      'nameID': 'TanningLeather',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 5,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FurPeltItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Town Bell',
      'nameID': 'TownBell',
      'skill': getSkillByNameID('SmeltingSkill'),
      'level': 5,
      'labor': 600,
      'craftingTable': getCraftingTableByNameID('BloomeryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TownBellItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Base Paint',
      'nameID': 'BasePaint',
      'skill': getSkillByNameID('PaintingSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('PaintMixerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WhitePowderItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 0.5,
          'reducible': true
        },
        {
          'item': getItemByNameID('Oil'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasePaintItem'),
          'quantity': 10,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Basic Backpack',
      'nameID': 'BasicBackpack',
      'skill': getSkillByNameID('GatheringSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('FiberScutchingStationObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('CottonBollItem'),
          'quantity': 24,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicBackpackItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Blue Powder',
      'nameID': 'BluePowder',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 24,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BluePowderItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charcoal Powder',
      'nameID': 'CharcoalPowder',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 24,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharcoalItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharcoalPowderItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Compost Adobe',
      'nameID': 'CompostAdobe',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 3,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdobeItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CompostFertilizerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('DirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Cooking Utensils',
      'nameID': 'CookingUtensils',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CookingUtensilsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Copper Hydroxide',
      'nameID': 'CopperHydroxide',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 24,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedCopperOreItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperHydroxideItem'),
          'quantity': 12,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cyan Powder',
      'nameID': 'CyanPowder',
      'skill': getSkillByNameID('PaintingSkill'),
      'level': 3,
      'labor': 24,
      'craftingTable': getCraftingTableByNameID('PaintMixerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperHydroxideItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('BluePowderItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('WhitePowderItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CyanPowderItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Dowel',
      'nameID': 'Dowel',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DowelItem'),
          'quantity': 16,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fuse',
      'nameID': 'Fuse',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 1,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FuseItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Garden Gravel',
      'nameID': 'GardenGravel',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Rock'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GardenGravelItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Garden Pond',
      'nameID': 'GardenPond',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 4,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedRock'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GardenPondItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Granite Spiral Fountain',
      'nameID': 'GraniteSpiralFountain',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 3,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GraniteItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GraniteSpiralFountainItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Granite Terrace Fountain',
      'nameID': 'GraniteTerraceFountain',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 3,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GraniteItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GraniteTerraceFountainItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Grease',
      'nameID': 'Grease',
      'skill': getSkillByNameID('ButcherySkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TallowItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hare Pelt',
      'nameID': 'HarePelt',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('ButcheryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MediumCarcass'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HarePeltItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Hewn Log',
      'nameID': 'HewnLog',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 1,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('DowelItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HewnLogItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Industrial Mill',
      'nameID': 'IndustrialMill',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('GearboxItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CombustionEngineItem'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IndustrialMillItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Injection Mold Machine',
      'nameID': 'InjectionMoldMachine',
      'skill': getSkillByNameID('IndustrySkill'),
      'level': 3,
      'labor': 560,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('ElectricMotorItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('InjectionMoldMachineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Oxide',
      'nameID': 'IronOxide',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 24,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedIronOreItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronOxideItem'),
          'quantity': 8,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Iron Paint Sprayer',
      'nameID': 'IronPaintSprayer',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 4,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('BlacksmithTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronPaintSprayerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Lubricant',
      'nameID': 'Lubricant',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 1,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PetroleumItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('BarrelItem'),
          'quantity': 3,
          'reducible': true,
          'primary': false
        },
        {
          'item': getItemByNameID('SulfurItem'),
          'quantity': 1,
          'reducible': true,
          'primary': false
        }
      ]
    },
    {
      'name': 'Magenta Powder',
      'nameID': 'MagentaPowder',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 24,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('UrchinItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MagentaPowderItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mill Stone',
      'nameID': 'MillStone',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Rock'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MillStoneItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Modern Paint Sprayer',
      'nameID': 'ModernPaintSprayer',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 6,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('PowerHammerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('SyntheticRubberItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ModernPaintSprayerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Paint Mixer',
      'nameID': 'PaintMixer',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 3,
      'labor': 180,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 8,
          'reducible': false
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 6,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PaintMixerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Painting Upgrade',
      'nameID': 'PaintingUpgrade',
      'skill': getSkillByNameID('PaintingSkill'),
      'level': 7,
      'labor': 3000,
      'craftingTable': getCraftingTableByNameID('PaintMixerObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BasicUpgradeLvl4Item'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PaintingUpgradeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Plastic Outdoor Bench',
      'nameID': 'PlasticOutdoorBench',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 3,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('InjectionMoldMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PlasticOutdoorBenchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Plastic Outdoor Chair',
      'nameID': 'PlasticOutdoorChair',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('InjectionMoldMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PlasticOutdoorChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Plastic Outdoor Table',
      'nameID': 'PlasticOutdoorTable',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 4,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('InjectionMoldMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PlasticOutdoorTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Plastic Utensils',
      'nameID': 'PlasticUtensils',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('InjectionMoldMachineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CookingUtensilsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Plastic Window Planter',
      'nameID': 'PlasticWindowPlanter',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PlasticWindowPlanterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Polishing Paste',
      'nameID': 'PolishingPaste',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 1,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LubricantItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Silica'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('PolishingPasteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Powdered Creosote',
      'nameID': 'PowderedCreosote',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 45,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CreosoteFlowerItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('YellowPowderItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Primitive Backpack',
      'nameID': 'PrimitiveBackpack',
      'skill': getSkillByNameID('HuntingSkill'),
      'level': 1,
      'labor': 1,
      'craftingTable': getCraftingTableByNameID('FletchingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 25,
          'reducible': true
        },
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BasicBackpackItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Redwoods Poster',
      'nameID': 'RedwoodsPoster',
      'skill': getSkillByNameID('PaperMillingSkill'),
      'level': 4,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('PrintingPressObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PrintingSuppliesItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RedwoodsPosterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Rustic Window Planter',
      'nameID': 'RusticWindowPlanter',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RusticWindowPlanterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Scarecrow',
      'nameID': 'Scarecrow',
      'skill': getSkillByNameID('FarmingSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 35,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ScarecrowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Sharpening Steel',
      'nameID': 'SharpeningSteel',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 1,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SharpeningSteelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steam Tractor Scoop',
      'nameID': 'SteamTractorScoop',
      'skill': getSkillByNameID('MechanicsSkill'),
      'level': 2,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('AssemblyLineObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronPlateItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('ScrewsItem'),
          'quantity': 18,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteamTractorScoopItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Steel Spring',
      'nameID': 'SteelSpring',
      'skill': getSkillByNameID('AdvancedSmeltingSkill'),
      'level': 2,
      'labor': 85,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SteelBarItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SteelSpringItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Store Sign',
      'nameID': 'StoreSign',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StoreSignItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tapestry',
      'nameID': 'Tapestry',
      'skill': getSkillByNameID('TailoringSkill'),
      'level': 5,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('LoomObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TapestryItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tiki Torch',
      'nameID': 'TikiTorch',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TikiTorchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Whetstone',
      'nameID': 'Whetstone',
      'skill': getSkillByNameID('MasonrySkill'),
      'level': 1,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Rock'),
          'quantity': 3,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WhetstoneItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'White Powder',
      'nameID': 'WhitePowder',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 24,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TrilliumFlowerItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WhitePowderItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Window Shutters Center',
      'nameID': 'WindowShuttersCenter',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WindowShuttersCenterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wood Window Planter',
      'nameID': 'WoodWindowPlanter',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 1,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodWindowPlanterItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Gear',
      'nameID': 'WoodenGear',
      'skill': getSkillByNameID('BasicEngineeringSkill'),
      'level': 1,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenGearItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Paint Sprayer',
      'nameID': 'WoodenPaintSprayer',
      'skill': getSkillByNameID('BlacksmithSkill'),
      'level': 2,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('AnvilObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('LeatherHideItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenPaintSprayerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Yellow Powder',
      'nameID': 'YellowPowder',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 24,
      'craftingTable': getCraftingTableByNameID('MillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SunflowerItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('YellowPowderItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Adobe',
      'nameID': 'Adobe',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('DirtItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdobeItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Adobe Door',
      'nameID': 'AdobeDoor',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AdobeItem'),
          'quantity': 2,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AdobeDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Amendments',
      'nameID': 'Amendments',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AmendmentsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Arrow',
      'nameID': 'Arrow',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('ToolBenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ArrowItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Ballot Box',
      'nameID': 'BallotBox',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BallotBoxItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Board Of Elections',
      'nameID': 'BoardOfElections',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BoardOfElectionsItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Boards',
      'nameID': 'Boards',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BoardItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Campfire',
      'nameID': 'Campfire',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('CampsiteObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 3,
          'reducible': true
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CampfireItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Capitol',
      'nameID': 'Capitol',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CapitolItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Carpentry Table',
      'nameID': 'CarpentryTable',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CarpentryTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Cast Iron Plaque',
      'nameID': 'CastIronPlaque',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('BloomeryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronConcentrateItem'),
          'quantity': 4,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CastIronPlaqueItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Census Bureau',
      'nameID': 'CensusBureau',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CensusBureauItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Charred Mortar',
      'nameID': 'CharredMortar',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('CampfireObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('NaturalFiber'),
          'quantity': 5,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MortarItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Claim Tool',
      'nameID': 'ClaimTool',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 200,
      'craftingTable': getCraftingTableByNameID('ToolBenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ClaimToolItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Coarse Stone',
      'nameID': 'CoarseStone',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('ToolBenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Rock'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CoarseStoneItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Construction Post',
      'nameID': 'ConstructionPost',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ConstructionPostItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Contract Board',
      'nameID': 'ContractBoard',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ContractBoardItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Country Foundation',
      'nameID': 'CountryFoundation',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassItem'),
          'quantity': 30,
          'reducible': false
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 16,
          'reducible': false
        },
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 16,
          'reducible': false
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 16,
          'reducible': false
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 30,
          'reducible': false
        },
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 30,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CountryFoundationItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Court Table',
      'nameID': 'CourtTable',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CourtTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Dirt Ramp',
      'nameID': 'DirtRamp',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 15,
      'craftingTable': getCraftingTableByNameID('WainwrightTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('DirtItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DirtRampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Dirt Ramp Basic',
      'nameID': 'DirtRampBasic',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 20,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('DirtItem'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DirtRampItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Embassy Desk',
      'nameID': 'EmbassyDesk',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('EmbassyDeskItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Executive Office',
      'nameID': 'ExecutiveOffice',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ExecutiveOfficeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Federation Foundation',
      'nameID': 'FederationFoundation',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 3600,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AshlarGraniteItem'),
          'quantity': 30,
          'reducible': false
        },
        {
          'item': getItemByNameID('AshlarLimestoneItem'),
          'quantity': 30,
          'reducible': false
        },
        {
          'item': getItemByNameID('NylonCarpetItem'),
          'quantity': 30,
          'reducible': false
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 60,
          'reducible': false
        },
        {
          'item': getItemByNameID('SteelPlateItem'),
          'quantity': 120,
          'reducible': false
        },
        {
          'item': getItemByNameID('CompositeLumber'),
          'quantity': 60,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FederationFoundationItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Fishing Pole',
      'nameID': 'FishingPole',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('ToolBenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 5,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FishingPoleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Government Office',
      'nameID': 'GovernmentOffice',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GovernmentOfficeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Homestead Claim Stake',
      'nameID': 'HomesteadClaimStake',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HomesteadClaimStakeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Immigration Desk',
      'nameID': 'ImmigrationDesk',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ImmigrationDeskItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Incinerate Garbage',
      'nameID': 'IncinerateGarbage',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 500,
      'craftingTable': getCraftingTableByNameID('BlastFurnaceObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GarbageItem'),
          'quantity': 4,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DirtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Kite',
      'nameID': 'Kite',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('TailoringTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('Fabric'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('KiteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Large Court',
      'nameID': 'LargeCourt',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 2000,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonFabricItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('LargeCourtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Masonry Table',
      'nameID': 'MasonryTable',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Rock'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MasonryTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Outpost Table',
      'nameID': 'OutpostTable',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('GlassLensItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OutpostTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Research Table',
      'nameID': 'ResearchTable',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ResearchTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Scrap Tool',
      'nameID': 'ScrapTool',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 120,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Tool'),
          'quantity': 1,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('GarbageItem'),
          'quantity': 0.1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Settlement Crafting Table',
      'nameID': 'SettlementCraftingTable',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 360,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SettlementCraftingTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Court',
      'nameID': 'SmallCourt',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 2000,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallCourtItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Small Stockpile',
      'nameID': 'SmallStockpile',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SmallStockpileItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stenographers Table',
      'nameID': 'StenographersTable',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StenographersTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stockpile',
      'nameID': 'Stockpile',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StockpileItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stone Axe',
      'nameID': 'StoneAxe',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('ToolBenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StoneAxeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stone Hammer',
      'nameID': 'StoneHammer',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('ToolBenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StoneHammerItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stone Machete',
      'nameID': 'StoneMachete',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('ToolBenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StoneMacheteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stone Pickaxe',
      'nameID': 'StonePickaxe',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('ToolBenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StonePickaxeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stone Plaque',
      'nameID': 'StonePlaque',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('MasonryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StonePlaqueItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stone Sickle',
      'nameID': 'StoneSickle',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('ToolBenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StoneSickleItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Storage Chest',
      'nameID': 'StorageChest',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 25,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StorageChestItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Store',
      'nameID': 'Store',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StoreItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tiny Stockpile',
      'nameID': 'TinyStockpile',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 5,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TinyStockpileItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Tool Bench',
      'nameID': 'ToolBench',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('CampsiteObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ToolBenchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Torch',
      'nameID': 'Torch',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TorchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Torch Stand',
      'nameID': 'TorchStand',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('Rock'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TorchStandItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Town Foundation',
      'nameID': 'TownFoundation',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TownFoundationItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Treasury',
      'nameID': 'Treasury',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 1500,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BrickItem'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('GoldBarItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 30,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('TreasuryItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wall Mounted Chest',
      'nameID': 'WallMountedChest',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 40,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('IronBarItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 8,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WallMountedChestItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wood Plaque',
      'nameID': 'WoodPlaque',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('CarpentryTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 10,
          'reducible': true
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodPlaqueItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Bow',
      'nameID': 'WoodenBow',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('ToolBenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 30,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 24,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenBowItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Hoe',
      'nameID': 'WoodenHoe',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('ToolBenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenHoeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Shovel',
      'nameID': 'WoodenShovel',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('ToolBenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenShovelItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Wall Torch Stand',
      'nameID': 'WoodenWallTorchStand',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 10,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('Wood'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenWallTorchStandItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Workbench',
      'nameID': 'Workbench',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 30,
      'craftingTable': getCraftingTableByNameID('CampsiteObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WorkbenchItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Zoning Office',
      'nameID': 'ZoningOffice',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 1200,
      'craftingTable': getCraftingTableByNameID('SettlementCraftingTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HewnLog'),
          'quantity': 15,
          'reducible': true
        },
        {
          'item': getItemByNameID('MortaredStone'),
          'quantity': 15,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ZoningOfficeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Acorn Powder',
      'nameID': 'ProcessedAcornPowder',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 5,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('AcornItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('AcornPowderItem'),
          'quantity': 6,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Bean Paste',
      'nameID': 'ProcessedBeanPaste',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 3,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeansItem'),
          'quantity': 18,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BeanPasteItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Beet Sugar',
      'nameID': 'ProcessedBeetSugar',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 3,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BeetItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 12,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Blue Powder',
      'nameID': 'ProcessedBluePowder',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BluePowderItem'),
          'quantity': 12,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Camas Paste',
      'nameID': 'ProcessedCamasPaste',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CamasBulbItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CamasPasteItem'),
          'quantity': 6,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Charcoal Powder',
      'nameID': 'ProcessedCharcoalPowder',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharcoalItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharcoalPowderItem'),
          'quantity': 12,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Colored Powder',
      'nameID': 'ProcessedColoredPowder',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 55,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Petals'),
          'quantity': 8,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('ColoredPowderItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Copper Hydroxide',
      'nameID': 'ProcessedCopperHydroxide',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedCopperOreItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CopperHydroxideItem'),
          'quantity': 26,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Cornmeal',
      'nameID': 'ProcessedCornmeal',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CornItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CornmealItem'),
          'quantity': 6,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CerealGermItem'),
          'quantity': 12,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Processed Cottonseed Oil',
      'nameID': 'ProcessedCottonseedOil',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 4,
      'labor': 75,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CottonSeedItem'),
          'quantity': 13,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Creosote',
      'nameID': 'ProcessedCreosote',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CreosoteFlowerItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('YellowPowderItem'),
          'quantity': 14,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Fish Oil',
      'nameID': 'ProcessedFishOil',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 4,
      'labor': 75,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RawFishItem'),
          'quantity': 5,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Flour',
      'nameID': 'ProcessedFlour',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('WheatItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FlourItem'),
          'quantity': 6,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Huckleberry Extract',
      'nameID': 'ProcessedHuckleberryExtract',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 50,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('HuckleberryExtractItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Iron Oxide',
      'nameID': 'ProcessedIronOxide',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CrushedIronOreItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('IronOxideItem'),
          'quantity': 20,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Magenta Powder',
      'nameID': 'ProcessedMagentaPowder',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('UrchinItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MagentaPowderItem'),
          'quantity': 14,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Oil',
      'nameID': 'ProcessedOil',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 75,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CerealGermItem'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Rice Flour',
      'nameID': 'ProcessedRiceFlour',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('RiceItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RiceFlourItem'),
          'quantity': 6,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CerealGermItem'),
          'quantity': 5,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Processed Simple Syrup',
      'nameID': 'ProcessedSimpleSyrup',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 5,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 25,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SimpleSyrupItem'),
          'quantity': 3,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Sugar',
      'nameID': 'ProcessedSugar',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 1,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('HuckleberriesItem'),
          'quantity': 20,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Sun Cheese',
      'nameID': 'ProcessedSunCheese',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 3,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SunflowerSeedItem'),
          'quantity': 18,
          'reducible': true
        },
        {
          'item': getItemByNameID('YeastItem'),
          'quantity': 6,
          'reducible': true
        },
        {
          'item': getItemByNameID('RiceItem'),
          'quantity': 12,
          'reducible': true
        },
        {
          'item': getItemByNameID('Oil'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('SunCheeseItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Sunflower Oil',
      'nameID': 'ProcessedSunflowerOil',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 4,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SunflowerSeedItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('OilItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed White Powder',
      'nameID': 'ProcessedWhitePowder',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('TrilliumFlowerItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WhitePowderItem'),
          'quantity': 14,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Yeast',
      'nameID': 'ProcessedYeast',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 4,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SugarItem'),
          'quantity': 10,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('YeastItem'),
          'quantity': 6,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processed Yellow Powder',
      'nameID': 'ProcessedYellowPowder',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 2,
      'labor': 65,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SunflowerItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('YellowPowderItem'),
          'quantity': 14,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Processsed Flaxseed Oil',
      'nameID': 'ProcesssedFlaxseedOil',
      'skill': getSkillByNameID('MillingSkill'),
      'level': 3,
      'labor': 100,
      'craftingTable': getCraftingTableByNameID('IndustrialMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FlaxSeedItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('FlaxseedOilItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Black Powder',
      'nameID': 'BlackPowder',
      'skill': getSkillByNameID('FertilizersSkill'),
      'level': 3,
      'labor': 35,
      'craftingTable': getCraftingTableByNameID('FarmersTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CharcoalPowderItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CompostItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrushedSulfurItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BlackPowderItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Blasting Cap',
      'nameID': 'BlastingCap',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 2,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CopperPlateItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('CopperWiringItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('EthanolItem'),
          'quantity': 1,
          'reducible': true
        },
        {
          'item': getItemByNameID('NitricAcidItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('BlastingCapItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Crushed Sulfur',
      'nameID': 'CrushedSulfur',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 70,
      'craftingTable': getCraftingTableByNameID('ArrastraObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SulfurItem'),
          'quantity': 12,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedSulfurItem'),
          'quantity': 2,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedMixedRockItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Sulfur Lv2',
      'nameID': 'CrushedSulfurLv2',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('StampMillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SulfurItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedSulfurItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        },
        {
          'item': getItemByNameID('CrushedMixedRockItem'),
          'quantity': 1,
          'reducible': false,
          'primary': false
        }
      ]
    },
    {
      'name': 'Crushed Sulfur Lv3',
      'nameID': 'CrushedSulfurLv3',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 2,
      'labor': 70,
      'craftingTable': getCraftingTableByNameID('JawCrusherObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('SulfurItem'),
          'quantity': 20,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CrushedSulfurItem'),
          'quantity': 5,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Dynamite',
      'nameID': 'Dynamite',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 3,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('MachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('BlackPowderItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('PaperItem'),
          'quantity': 12,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('DynamiteItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Mining Charge',
      'nameID': 'MiningCharge',
      'skill': getSkillByNameID('MiningSkill'),
      'level': 5,
      'labor': 300,
      'craftingTable': getCraftingTableByNameID('ElectricMachinistTableObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('DynamiteItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('BlastingCapItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('BasicCircuitItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('MiningChargeItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Nitric Acid',
      'nameID': 'NitricAcid',
      'skill': getSkillByNameID('OilDrillingSkill'),
      'level': 1,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('OilRefineryObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('CompostItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('CrushedCopperOreItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('NitricAcidItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Peat Charcoal',
      'nameID': 'PeatCharcoal',
      'skill': getSkillByNameID('LoggingSkill'),
      'level': 5,
      'labor': 50,
      'craftingTable': getCraftingTableByNameID('KilnObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PeatItem'),
          'quantity': 1,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('CharcoalItem'),
          'quantity': 4,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Remote Detonator',
      'nameID': 'RemoteDetonator',
      'skill': getSkillByNameID('ElectronicsSkill'),
      'level': 3,
      'labor': 250,
      'craftingTable': getCraftingTableByNameID('ElectronicsAssemblyObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('FiberglassItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('PlasticItem'),
          'quantity': 20,
          'reducible': true
        },
        {
          'item': getItemByNameID('LightBulbItem'),
          'quantity': 2,
          'reducible': true
        },
        {
          'item': getItemByNameID('AdvancedCircuitItem'),
          'quantity': 4,
          'reducible': true
        },
        {
          'item': getItemByNameID('FuseItem'),
          'quantity': 2,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('RemoteDetonatorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stump Bed',
      'nameID': 'StumpBed',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('PlantFibersItem'),
          'quantity': 40,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StumpBedItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stump Chair',
      'nameID': 'StumpChair',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StumpChairItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stump Latrine',
      'nameID': 'StumpLatrine',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 6,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StumpLatrineItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Stump Table',
      'nameID': 'StumpTable',
      'skill': getSkillByNameID('SelfImprovementSkill'),
      'level': 0,
      'labor': 60,
      'craftingTable': getCraftingTableByNameID('WorkbenchObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Wood'),
          'quantity': 16,
          'reducible': true
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('StumpTableItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    },
    {
      'name': 'Wooden Sliding Door',
      'nameID': 'WoodenSlidingDoor',
      'skill': getSkillByNameID('CarpentrySkill'),
      'level': 5,
      'labor': 80,
      'craftingTable': getCraftingTableByNameID('SawmillObject'),
      'hidden': false,
      'ingredients': [
        {
          'item': getItemByNameID('Lumber'),
          'quantity': 8,
          'reducible': false
        },
        {
          'item': getItemByNameID('WoodBoard'),
          'quantity': 8,
          'reducible': false
        }
      ],
      'outputs': [
        {
          'item': getItemByNameID('WoodenSlidingDoorItem'),
          'quantity': 1,
          'reducible': false,
          'primary': true
        }
      ]
    }
  ];

export const recipes: Map<string, Recipe> = new Map(recipesArray.map(
  recipe => [recipe.nameID, new Recipe(recipe)]
));
