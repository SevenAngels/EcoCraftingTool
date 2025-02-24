import {IUpgradeModule, UpgradeModule} from '../../app/model/upgrade-module';

export const upgradeModulesArray: IUpgradeModule[] =
  [
    {
      'name': 'No Upgrade',
      'nameID': 'NoUpgradeNone',
      'typeNameID': 'None',
      'modifier': 1.0
    },
    {
      'name': 'No Upgrade',
      'nameID': 'NoUpgradeAdvanced',
      'typeNameID': 'AdvancedUpgrade',
      'modifier': 1.0
    },
    {
      'name': 'Advanced Upgrade 1',
      'nameID': 'AdvancedUpgrade1',
      'typeNameID': 'AdvancedUpgrade',
      'modifier': 0.9
    },
    {
      'name': 'Advanced Upgrade 2',
      'nameID': 'AdvancedUpgrade2',
      'typeNameID': 'AdvancedUpgrade',
      'modifier': 0.75
    },
    {
      'name': 'Advanced Upgrade 3',
      'nameID': 'AdvancedUpgrade3',
      'typeNameID': 'AdvancedUpgrade',
      'modifier': 0.6
    },
    {
      'name': 'Advanced Upgrade 4',
      'nameID': 'AdvancedUpgrade4',
      'typeNameID': 'AdvancedUpgrade',
      'modifier': 0.55
    },
    {
      'name': 'No Upgrade',
      'nameID': 'NoUpgradeBasic',
      'typeNameID': 'BasicUpgrade',
      'modifier': 1.0
    },
    {
      'name': 'Basic Upgrade 1',
      'nameID': 'BasicUpgrade1',
      'typeNameID': 'BasicUpgrade',
      'modifier': 0.9
    },
    {
      'name': 'Basic Upgrade 2',
      'nameID': 'BasicUpgrade2',
      'typeNameID': 'BasicUpgrade',
      'modifier': 0.75
    },
    {
      'name': 'Basic Upgrade 3',
      'nameID': 'BasicUpgrade3',
      'typeNameID': 'BasicUpgrade',
      'modifier': 0.6
    },
    {
      'name': 'Basic Upgrade 4',
      'nameID': 'BasicUpgrade4',
      'typeNameID': 'BasicUpgrade',
      'modifier': 0.55
    },
    {
      'name': 'No Upgrade',
      'nameID': 'NoUpgradeModern',
      'typeNameID': 'ModernUpgrade',
      'modifier': 1.0
    },
    {
      'name': 'Modern Upgrade 1',
      'nameID': 'ModernUpgrade1',
      'typeNameID': 'ModernUpgrade',
      'modifier': 0.9
    },
    {
      'name': 'Modern Upgrade 2',
      'nameID': 'ModernUpgrade2',
      'typeNameID': 'ModernUpgrade',
      'modifier': 0.75
    },
    {
      'name': 'Modern Upgrade 3',
      'nameID': 'ModernUpgrade3',
      'typeNameID': 'ModernUpgrade',
      'modifier': 0.6
    },
    {
      'name': 'Modern Upgrade 4',
      'nameID': 'ModernUpgrade4',
      'typeNameID': 'ModernUpgrade',
      'modifier': 0.55
    },
    {
      'name': 'Advanced Upgrade 5',
      'nameID': 'SpecializedAdvancedUpgrade',
      'typeNameID': 'AdvancedUpgrade',
      'modifier': 0.5
    },
    {
      'name': 'Basic Upgrade 5',
      'nameID': 'SpecializedBasicUpgrade',
      'typeNameID': 'BasicUpgrade',
      'modifier': 0.5
    },
    {
      'name': 'Modern Upgrade 5',
      'nameID': 'SpecializedModernUpgrade',
      'typeNameID': 'ModernUpgrade',
      'modifier': 0.5
    }
  ];

export const upgradeModules: Map<string, UpgradeModule> = new Map(upgradeModulesArray.map(
  module => [module.nameID, new UpgradeModule(module)]
));
