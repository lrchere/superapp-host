//
//  RCTNativeLocalStorage.m
//  superapphost
//
//  Created by Laurence Vieira Escobar on 16/07/25.
//

#import "RCTNativeLocalStorage.h"

static NSString *const RCTNativeLocalStorageKey = @"local-storage";

@interface RCTNativeLocalStorage()
@property (strong, nonatomic) NSUserDefaults *localStorage;
@end

@implementation RCTNativeLocalStorage

- (id)init
{
  self = [super init];
  if (self) {
    _localStorage = [[NSUserDefaults alloc] initWithSuiteName:RCTNativeLocalStorageKey];

  }
  return self;
}

+ (NSString *)moduleName { 
  return @"NativeLocalStorage";
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params { 
  return std::make_shared<facebook::react::NativeLocalStorageSpecJSI>(params);
}

- (void)clear { 
  NSDictionary *keys = [self.localStorage dictionaryRepresentation];
    for (NSString *key in keys) {
      [self removeItem:key];
    }
}

- (NSString * _Nullable)getItem:(nonnull NSString *)key { 
  return [self.localStorage stringForKey:key];
}

- (void)removeItem:(nonnull NSString *)key { 
  [self.localStorage removeObjectForKey:key];
}

- (void)setItem:(nonnull NSString *)value key:(nonnull NSString *)key { 
  [self.localStorage setObject:value forKey:key];
}

@end
